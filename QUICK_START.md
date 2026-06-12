# 🚀 Quick Terminal Commands for Dr. Ruth Njoroge Medical Spa

## ⚠️ IMPORTANT: Make sure Node.js is installed first!
Check: node --version && npm --version

---

## 📦 STEP 1: Install Backend Dependencies

```bash
cd backend
npm install
```

**What this installs:**
- express (REST API server)
- mongoose (MongoDB connection)
- cors (cross-origin requests)
- dotenv (environment variables)
- express-validator (input validation)
- jsonwebtoken (authentication)
- bcryptjs (password hashing)
- nodemon (auto-reload)

⏱️ Takes ~2-3 minutes

---

## 📦 STEP 2: Install Frontend Dependencies

```bash
cd frontend
npm install
```

**What this installs:**
- @angular/core (Angular framework)
- @angular/material (UI components)
- @angular/forms (reactive forms)
- @angular/router (routing)
- @angular/cdk (component toolkit)
- rxjs (reactive programming)
- typescript (type safety)

⏱️ Takes ~3-5 minutes

---

## ✅ STEP 3: Verify .env Configuration

Backend/.env file is ready with:
- Local MongoDB: mongodb://localhost:27017/drruthnjoroge
- Default admin: admin@drruthnjoroge.com / admin123

To use MongoDB Atlas instead:
1. Get connection string from MongoDB Atlas
2. Edit backend/.env, replace MONGODB_URI line
3. Example: mongodb+srv://user:password@cluster.mongodb.net/drruthnjoroge

---

## 🗄️ STEP 4: Start MongoDB (Choose One)

### Option A: Windows (Local)
```bash
net start MongoDB
```

### Option B: Mac (Local)
```bash
brew services start mongodb-community
```

### Option C: Linux (Local)
```bash
sudo systemctl start mongod
```

### Option D: Skip - Use MongoDB Atlas (Cloud)
Skip this step, backend will connect to cloud

---

## 🚀 STEP 5: Start Backend Server

Open first terminal/command prompt:

```bash
cd backend
npm run dev
```

✅ Watch for message: "✓ MongoDB connected successfully"
✅ Should show: "Server running on http://localhost:3000"

---

## 🎨 STEP 6: Start Frontend Server

Open SECOND terminal/command prompt:

```bash
cd frontend
npm start
```

✅ Wait for: "Application bundle generated successfully"
✅ Browser may auto-open to http://localhost:4200
✅ If not, manually visit: http://localhost:4200

---

## 🎯 STEP 7: Test the Application

### Test Booking:
1. Click "Book Now" in navbar
2. Fill form with:
   - Name: John Doe
   - Email: john@example.com
   - Phone: +254700000000
   - Service: Facial Treatments
   - Date: Pick any future date
3. Click "Confirm Booking"
4. Should see: ✅ Appointment booked successfully!

### Test Admin Dashboard:
1. Click "Admin" in navbar or go to /admin/dashboard
2. Login with:
   - Email: admin@drruthnjoroge.com
   - Password: admin123
3. Should see table with all bookings
4. Test "✓" button to mark complete
5. Test "🗑️" button to delete appointment

### Verify in Database:
Download MongoDB Compass (free GUI):
1. Connect to localhost:27017
2. Database: drruthnjoroge
3. Collection: appointments
4. Should see documents from your bookings

---

## 📂 Current Directory Structure

```
drruthnjoroge/
├── backend/
│   ├── models/
│   │   └── Appointment.js           ← MongoDB schema
│   ├── routes/
│   │   ├── appointments.js          ← Booking API
│   │   └── admin.js                 ← Management API
│   ├── middleware/
│   │   └── auth.js                  ← Authentication
│   ├── server.js                    ← Main server
│   ├── package.json
│   ├── .env                         ← Configuration
│   └── node_modules/                (created after npm install)
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── shared/          ← Navbar, Footer
    │   │   │   └── pages/           ← 5 pages + Admin
    │   │   ├── services/
    │   │   │   └── appointment.service.ts
    │   │   ├── models/
    │   │   │   └── appointment.model.ts
    │   │   ├── app.module.ts        ← Material imports
    │   │   ├── app-routing.module.ts
    │   │   └── app.component.ts
    │   ├── main.ts
    │   ├── index.html
    │   └── styles.scss
    ├── angular.json
    ├── tsconfig.json
    ├── package.json
    └── node_modules/                (created after npm install)
```

---

## 🛑 Stopping Services

### Stop Backend (Terminal 1):
Press: Ctrl + C

### Stop Frontend (Terminal 2):
Press: Ctrl + C

### Stop MongoDB:

Windows:
```bash
net stop MongoDB
```

Mac:
```bash
brew services stop mongodb-community
```

Linux:
```bash
sudo systemctl stop mongod
```

---

## 🔄 Restart Services (After Stopping)

Just run the same commands again in each terminal:

Terminal 1:
```bash
cd backend
npm run dev
```

Terminal 2:
```bash
cd frontend
npm start
```

---

## 🐛 Common Issues & Fixes

### Issue: "Cannot find module"
```bash
# Delete and reinstall node_modules
cd <frontend or backend>
rm -r node_modules
npm install
```

### Issue: "Port 3000 already in use"
```bash
# Option 1: Kill the process (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Option 2: Change port in backend/.env
PORT=3001
```

### Issue: "MongoDB connection failed"
```bash
# Check if MongoDB is running:
# Windows: Services app or check net start MongoDB
# Mac: brew services list
# Linux: sudo systemctl status mongod

# If using local MongoDB and it's not running, start it first
# OR update backend/.env with MongoDB Atlas connection string
```

### Issue: "Port 4200 already in use"
```bash
# Start on different port:
ng serve --port 4300
# Then visit http://localhost:4300
```

---

## 📊 API Endpoints Reference

### Booking (Public)
```
POST http://localhost:3000/api/appointments
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+254700000000",
  "service": "Facial Treatments",
  "appointmentDate": "2024-06-10T10:00:00Z",
  "notes": "Optional notes"
}
```

### Admin (Protected)
```
POST http://localhost:3000/api/admin/login
{"email": "admin@drruthnjoroge.com", "password": "admin123"}
Response: {token: "admin-token-xxxxx"}

GET http://localhost:3000/api/admin/appointments
Header: Authorization: Bearer admin-token-xxxxx

DELETE http://localhost:3000/api/admin/appointments/:id
Header: Authorization: Bearer admin-token-xxxxx

PATCH http://localhost:3000/api/admin/appointments/:id
Header: Authorization: Bearer admin-token-xxxxx
Body: {"status": "Completed"}
```

---

## 🌐 Website Pages

1. **Home** (/) 
   - Hero section with CTAs
   - Highlight cards

2. **About** (/about)
   - Dr. Ruth's credentials
   - Clinical spa philosophy
   - Areas of expertise

3. **Services** (/services)
   - 5 service categories with pricing
   - Facial Treatments (KES 3,500)
   - Body Treatments (KES 2,500)
   - Hair & Scalp Care (KES 2,000)
   - Dermatological Services (KES 4,000)
   - Wellness Consultations (KES 1,500)

4. **Contact** (/contact)
   - Contact information
   - Business hours
   - Embedded Google Map (Mombasa, Kenya)

5. **Book Now** (/book-now)
   - Reactive form with Material components
   - Name, Email, Phone fields
   - Service dropdown
   - Date picker
   - Notes textarea

6. **Admin Dashboard** (/admin/dashboard)
   - Protected login screen
   - Data table with sorting & pagination
   - Mark complete & delete buttons

---

## 🎨 Color Theme Applied

```
Primary Blue:     #4a90a4 (Medical, professional)
Light Blue:       #7cb9d4 (Friendly, calming)
Accent Cream:     #d4a574 (Warm, welcoming)
Background:       #f0f8ff, #faf8f5 (Clean, premium)
Text:             #333333 (Professional)
```

---

## 📝 Environment Variables

Backend/.env:
```
# MongoDB - Choose one:
MONGODB_URI=mongodb://localhost:27017/drruthnjoroge
# OR
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/drruthnjoroge

# Server
PORT=3000
NODE_ENV=development

# Security
JWT_SECRET=your_secret_key_change_in_production

# Admin Account
ADMIN_EMAIL=admin@drruthnjoroge.com
ADMIN_PASSWORD=admin123
```

---

## ✨ What You've Built

✅ Complete 5-page professional website
✅ Appointment booking system with form validation
✅ MongoDB database with schema
✅ REST API backend (7 endpoints)
✅ Admin dashboard with data table
✅ Authentication & authorization
✅ Responsive design (mobile & desktop)
✅ Material Design UI components
✅ Professional medical spa theme
✅ Production-ready code structure

---

## 🎓 Next Steps (Optional)

1. **Customize**: Edit colors in frontend/src/styles.scss
2. **Add Services**: Update services array in services component
3. **Change Credentials**: Edit backend/.env admin account
4. **Deploy**: Host frontend on Vercel, backend on Heroku
5. **Database**: Use MongoDB Atlas for production
6. **Email**: Add nodemailer for confirmation emails
7. **SMS**: Add Twilio for SMS confirmations
8. **Analytics**: Add Google Analytics
9. **SSL**: Enable HTTPS in production

---

## 📞 Support

- Review README.md for detailed documentation
- Check SETUP_GUIDE.md for troubleshooting
- Review component files for customization hints
- Comment-heavy code for learning

---

**Project Status**: ✅ Ready to Use
**Setup Time**: 15-20 minutes
**Node.js Version**: 16+ required
**Database**: MongoDB (local or cloud)

Good luck with your medical spa website! 🏥💆‍♀️
