const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
let databaseConnectionPromise;
let localDatabaseFallbackActive = false;
let localFallbackNoticeShown = false;
let localFileStorageNoticeShown = false;

// Middleware
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/drruthnjoroge';
const forceFileStorage = !process.env.NETLIFY && process.env.USE_FILE_STORAGE === 'true';

function describeMongoFailure(err) {
  if (err.code === 'ECONNREFUSED' && String(err.message).includes('mongodb._tcp')) {
    return [
      'MongoDB Atlas DNS lookup was refused.',
      'This usually means the network, DNS resolver, firewall, or VPN is blocking MongoDB SRV lookups.',
      'For local development, set USE_FILE_STORAGE=true in backend/.env to skip MongoDB and use backend/data/appointments.json.',
      'For Atlas, verify MONGODB_URI, Atlas network access/IP allowlist, internet/DNS access, and credentials.'
    ];
  }

  if (err.name === 'MongoServerSelectionError') {
    return [
      'MongoDB server selection failed.',
      'Check that the MongoDB server is reachable and that MONGODB_URI points to the correct database.',
      'For local development without MongoDB, set USE_FILE_STORAGE=true in backend/.env.'
    ];
  }

  return [
    'MongoDB connection failed.',
    'For local MongoDB: ensure the mongod service is running.',
    'For MongoDB Atlas: check MONGODB_URI, credentials, and network access.',
    'For local development without MongoDB: set USE_FILE_STORAGE=true in backend/.env.'
  ];
}

function activateLocalDatabaseFallback(err) {
  localDatabaseFallbackActive = true;

  if (localFallbackNoticeShown) {
    return;
  }

  localFallbackNoticeShown = true;
  console.warn('\nDatabase notice: running with local file-backed appointment storage.');
  console.warn(`Reason: ${err.message}`);
  console.warn('\nTroubleshooting:');
  describeMongoFailure(err).forEach((line, index) => {
    console.warn(`${index + 1}. ${line}`);
  });
  console.warn('\nLocal appointment data file: backend/data/appointments.json\n');
}

function activateConfiguredFileStorage() {
  localDatabaseFallbackActive = true;

  if (localFileStorageNoticeShown) {
    return;
  }

  localFileStorageNoticeShown = true;
  console.log('\nDatabase mode: local file-backed appointment storage');
  console.log('Reason: USE_FILE_STORAGE=true is enabled in backend/.env.');
  console.log('Local appointment data file: backend/data/appointments.json');
  console.log('To connect MongoDB instead, set USE_FILE_STORAGE=false and verify MONGODB_URI.\n');
}

function connectToDatabase() {
  if (forceFileStorage) {
    return Promise.reject(new Error('USE_FILE_STORAGE=true is enabled for local development'));
  }

  if (mongoose.connection.readyState === 1) {
    return Promise.resolve(mongoose.connection);
  }

  if (!process.env.NETLIFY && localDatabaseFallbackActive) {
    return Promise.reject(new Error('Using local file-backed appointment storage'));
  }

  if (mongoose.connection.readyState === 2 && databaseConnectionPromise) {
    return databaseConnectionPromise;
  }

  if (process.env.NETLIFY && !process.env.MONGODB_URI) {
    return Promise.reject(new Error('MONGODB_URI is required for Netlify appointment storage'));
  }

  databaseConnectionPromise = mongoose.connect(mongoURI, {
    serverSelectionTimeoutMS: 10000
  }).catch(err => {
    databaseConnectionPromise = null;
    throw err;
  });

  return databaseConnectionPromise;
}

async function ensureDatabaseConnection(req, res, next) {
  if (!process.env.NETLIFY && localDatabaseFallbackActive) {
    return next();
  }

  try {
    await connectToDatabase();
    next();
  } catch (err) {
    if (!process.env.NETLIFY) {
      activateLocalDatabaseFallback(err);
      return next();
    }

    console.error('MongoDB connection failed:', err.message);

    res.status(503).json({
      message: 'Appointment service is temporarily unavailable',
      error: err.message
    });
  }
}

if (!process.env.NETLIFY) {
  if (forceFileStorage) {
    activateConfiguredFileStorage();
  } else {
    connectToDatabase()
      .then(() => {
        console.log('MongoDB connected successfully');
        console.log(`Database: ${mongoURI}`);
      })
      .catch(err => {
        activateLocalDatabaseFallback(err);
      });
  }
}

// API Routes
app.use('/api', ensureDatabaseConnection);
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/admin', require('./routes/admin'));

// Health Check
app.get('/health', (req, res) => {
  res.json({
    status: 'Server running',
    storage: mongoose.connection.readyState === 1 ? 'mongodb' : 'local-file',
    timestamp: new Date()
  });
});

// Serve Angular frontend in production/full-stack prototype deployments.
const frontendDistPath = path.join(__dirname, '..', 'frontend', 'dist', 'drruthnjoroge');
app.use(express.static(frontendDistPath));

app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ message: 'Route not found' });
  }

  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

const PORT = Number(process.env.PORT) || 3000;
const isDevelopment = (process.env.NODE_ENV || 'development') === 'development';

function logStartup(port) {
  console.log(`\nDr. Ruth Njoroge Medical Spa API`);
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Appointment storage: ${mongoose.connection.readyState === 1 ? 'MongoDB' : 'local file-backed storage'}`);
  console.log('\nAvailable endpoints:');
  console.log('  POST   /api/appointments          - Book appointment');
  console.log('  GET    /api/admin/appointments    - Get all appointments (admin)');
  console.log('  DELETE /api/admin/appointments/:id - Delete appointment (admin)');
  console.log('  PATCH  /api/admin/appointments/:id - Update appointment status (admin)');
  console.log('  GET    /health                    - Health check\n');
}

function startServer(port, attemptsRemaining = 10) {
  const server = app.listen(port, () => {
    logStartup(port);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      if (isDevelopment && attemptsRemaining > 0) {
        const nextPort = port + 1;
        console.warn(`\nPort ${port} is already in use. Trying ${nextPort} instead...`);
        startServer(nextPort, attemptsRemaining - 1);
        return;
      }

      console.error(`\nPort ${port} is already in use.`);
      console.error('The backend may already be running in another terminal.');
      console.error(`Open http://localhost:${port}/health to check it, or stop the existing process before starting a new one.`);
      console.error('You can also set a different PORT value in backend/.env.\n');
      process.exit(1);
    }

    console.error('Server failed to start:', err.message);
    process.exit(1);
  });
}

if (require.main === module) {
  startServer(PORT);
}

module.exports = app;
