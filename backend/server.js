const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
let databaseConnectionPromise;
let localDatabaseFallbackActive = false;
let localFallbackNoticeShown = false;

// Middleware
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/drruthnjoroge';

function activateLocalDatabaseFallback(err) {
  localDatabaseFallbackActive = true;

  if (localFallbackNoticeShown) {
    return;
  }

  localFallbackNoticeShown = true;
  console.error('MongoDB connection failed:', err.message);
  console.log('\nTroubleshooting:');
  console.log('1. For local MongoDB: Ensure mongod service is running');
  console.log('2. For MongoDB Atlas: Check connection string in .env file');
  console.log('Local development will keep running with file-backed appointment storage.');
}

function connectToDatabase() {
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
  connectToDatabase()
    .then(() => {
      console.log('MongoDB connected successfully');
      console.log(`Database: ${mongoURI}`);
    })
    .catch(err => {
      activateLocalDatabaseFallback(err);
    });
}

// API Routes
app.use('/api', ensureDatabaseConnection);
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/admin', require('./routes/admin'));

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'Server running', timestamp: new Date() });
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

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\n🏥 Dr. Ruth Njoroge Medical Spa API`);
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log('\nAvailable endpoints:');
    console.log('  POST   /api/appointments          - Book appointment');
    console.log('  GET    /api/admin/appointments    - Get all appointments (admin)');
    console.log('  DELETE /api/admin/appointments/:id - Delete appointment (admin)');
    console.log('  PATCH  /api/admin/appointments/:id - Update appointment status (admin)');
    console.log('  GET    /health                    - Health check\n');
  });
}

module.exports = app;
