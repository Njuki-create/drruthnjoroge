# Dr. Ruth Njoroge Medical Spa - Complete Setup Guide

## 📋 Quick Start Commands

### ALL COMMANDS MUST BE RUN FROM THE PROJECT ROOT DIRECTORY

## STEP 1: Install MongoDB (Choose One Option)

### Option A: Local MongoDB (Windows)
```bash
# Download installer from https://www.mongodb.com/try/download/community
# Run installer and follow steps
# Then start MongoDB service:
net start MongoDB
```

### Option B: Local MongoDB (Mac)
```bash
# Install via Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Start service
brew services start mongodb-community
```

### Option C: Local MongoDB (Linux - Ubuntu/Debian)
```bash
# Install MongoDB
sudo apt-get install -y mongodb

# Start service
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Option D: MongoDB Atlas (Free Cloud - Recommended for Production)
1. Go to: https://www.mongodb.com/cloud/atlas
2. Click "Try Free"
3. Create account with Google or email
4. Create organization and project
5. Create a cluster (choose M0 - always free tier)
6. Wait 5-10 minutes for cluster creation
7. Click "Connect" button
8. Choose "Connect your application"
9. Copy connection string (looks like: mongodb+srv://username:password@cluster.mongodb.net/dbname)
10. Paste into backend\.env file, replace placeholders with your actual credentials

## STEP 2: Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install all npm packages (Angular Material, Mongoose, Express, etc.)
npm install

# Verify .env file exists with MongoDB connection
# If using MongoDB Atlas, update the MONGODB_URI in .env

# Start backend server
npm run dev
```

✅ Backend should show: "Server running on http://localhost:3000"

## STEP 3: Frontend Setup (NEW TERMINAL/COMMAND PROMPT)

```bash
# Navigate to frontend folder
cd frontend

# Install all npm packages including @angular/material
npm install

# Start Angular development server
npm start
```

✅ Frontend should show: "Application bundle generated successfully"
✅ Open http://localhost:4200 in your browser

## 🎯 Testing the Application

### Test 1: Book an Appointment
1. Go to http://localhost:4200
2. Click "Book Now" button
3. Fill in the form:
   - Name: John Doe
   - Email: john@example.com
   - Phone: +254700000000
   - Service: Facial Treatments
   - Date: Pick a future date
4. Click "Confirm Booking"
5. Should see: "Appointment booked successfully!"

### Test 2: Admin Dashboard
1. Go to http://localhost:4200/admin/dashboard
2. Login with credentials:
   - Email: admin@drruthnjoroge.com
   - Password: admin123
3. Should see all bookings in a data table
4. Test "Mark Complete" button on any appointment
5. Test "Delete" button to remove appointment

### Test 3: Verify MongoDB
Open MongoDB Compass (download from mongodb.com):
1. Connect to localhost:27017
2. Navigate to database: drruthnjoroge
3. Navigate to collection: appointments
4. Should see all booked appointments

## 📁 Project Structure Generated

```
drruthnjoroge/
├── backend/                              # Node.js/Express Server
│   ├── models/
│   │   └── Appointment.js               # MongoDB schema (Name, Email, Phone, Service, Date)
│   ├── routes/
│   │   ├── appointments.js              # POST booking, GET all, DELETE, PATCH status
│   │   └── admin.js                     # Admin login & management endpoints
│   ├── middleware/
│   │   └── auth.js                      # Token authentication middleware
│   ├── server.js                        # Main Express server
│   ├── package.json                     # Dependencies: express, mongoose, cors, dotenv
│   ├── .env                             # Configuration with MongoDB URI
│   └── .env.example                     # Template for environment variables
│
└── frontend/                             # Angular Application
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── shared/
    │   │   │   │   ├── navbar/          # Navigation bar with routing
    │   │   │   │   └── footer/          # Footer with contact info
    │   │   │   └── pages/
    │   │   │       ├── home/            # Hero section with CTAs
    │   │   │       ├── about/           # Dr. Ruth's profile & philosophy
    │   │   │       ├── services/        # Service cards with pricing
    │   │   │       ├── contact/         # Contact info & embedded Mombasa map
    │   │   │       ├── book-now/        # Reactive form with Material components
    │   │   │       └── admin-dashboard/ # Protected admin data table
    │   │   ├── services/
    │   │   │   └── appointment.service.ts # API communication service
    │   │   ├── models/
    │   │   │   └── appointment.model.ts # TypeScript interface
    │   │   ├── app.module.ts            # Module with Material imports
    │   │   ├── app-routing.module.ts    # Route configuration
    │   │   └── app.component.ts         # Root component
    │   ├── main.ts                      # Angular bootstrap
    │   ├── index.html                   # Main HTML template
    │   └── styles.scss                  # Global medical spa theme styles
    ├── angular.json                     # Angular CLI configuration
    ├── tsconfig.json                    # TypeScript configuration
    ├── package.json                     # Dependencies: @angular/material, rxjs
    └── src/
        └── environments/                # Environment configs
```

## 🔌 API Endpoints (Backend)

All these are automatically generated and functional:

### Booking Service (Public)
```
POST /api/appointments
- Body: { name, email, phone, service, appointmentDate, notes }
- Response: { message, appointment }
```

### Admin Management (Protected with Token)
```
POST /api/admin/login
- Body: { email, password }
- Response: { message, token, user }

GET /api/admin/appointments
- Headers: Authorization: Bearer {token}
- Response: { total, appointments[] }

DELETE /api/admin/appointments/:id
- Headers: Authorization: Bearer {token}
- Response: { message }

PATCH /api/admin/appointments/:id
- Headers: Authorization: Bearer {token}
- Body: { status: "Pending" | "Completed" | "Cancelled" }
- Response: { message, appointment }
```

## 🎨 Theme Colors Used

```
Primary Teal: #4a90a4 (Medical, professional, calming)
Secondary Teal: #7cb9d4 (Lighter, friendly)
Accent Cream: #d4a574 (Warm, welcoming)
Background: #f0f8ff, #faf8f5 (Clean, premium)
White: #ffffff (Pure, sterile)
```

## 🔒 Security Features Implemented

✅ Password hashing ready (bcryptjs available)
✅ JWT token authentication
✅ CORS enabled for local development
✅ Input validation with express-validator
✅ Environment variables for sensitive data
✅ Admin route protection
✅ Database connection error handling

## 📦 NPM Packages Included

### Backend
- express: REST API server
- mongoose: MongoDB ODM
- cors: Cross-origin requests
- dotenv: Environment variables
- express-validator: Input validation
- jsonwebtoken: JWT tokens
- bcryptjs: Password hashing
- nodemon: Auto-reload on changes

### Frontend
- @angular/core: Angular framework
- @angular/material: UI components
- @angular/forms: Reactive forms
- @angular/router: Routing
- rxjs: Reactive programming
- typescript: Type safety

## ⚠️ Important Notes

1. **Keep .env safe**: Never commit backend/.env to git (already in .gitignore)

2. **MongoDB Connection**: 
   - Local: mongodb://localhost:27017/drruthnjoroge
   - Atlas: mongodb+srv://user:pass@cluster.mongodb.net/drruthnjoroge

3. **Admin Credentials**: Change in production!
   - Current: admin@drruthnjoroge.com / admin123
   - Edit backend/.env to change

4. **CORS**: Currently allows localhost:4200 for development

5. **Two Terminals**: Backend and frontend must run simultaneously

## 🚀 Production Deployment Checklist

- [ ] Change ADMIN_PASSWORD in .env
- [ ] Change JWT_SECRET to random string (32+ chars)
- [ ] Use MongoDB Atlas (not local)
- [ ] Enable HTTPS
- [ ] Set NODE_ENV=production
- [ ] Update CORS allowed origins
- [ ] Build frontend: ng build --configuration production
- [ ] Use pm2 or systemd for backend
- [ ] Set up monitoring/logging
- [ ] Configure database backups

## 💡 Troubleshooting

### "Cannot connect to MongoDB"
```bash
# Check MongoDB is running:
mongosh  # or mongo in older versions

# If local connection fails, try MongoDB Atlas
# Update MONGODB_URI in backend/.env with Atlas connection string
```

### "Port 3000 already in use"
```bash
# Change port in backend/.env
PORT=3001

# Or kill existing process:
# Windows: netstat -ano | findstr :3000
# Mac/Linux: lsof -i :3000
```

### "Port 4200 already in use"
```bash
# Change frontend port:
ng serve --port 4300
```

### "Module not found" errors
```bash
# Delete node_modules and reinstall:
rm -r node_modules
npm install
```

## 📞 Contact Information

Dr. Ruth Njoroge Medical Spa
- 📧 info@drruthnjoroge.com
- 📞 +254 (700) 000-000
- 📍 Mombasa, Kenya

---

**Setup Time**: ~15-20 minutes (faster with MongoDB Atlas)
**Skills Required**: Basic Node.js, Angular, and command line knowledge
**Support**: Review README.md in root directory
