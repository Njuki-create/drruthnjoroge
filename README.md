# Dr. Ruth Njoroge Medical Spa - Full Stack Application

A modern, premium medical spa website built with Angular, Angular Material, Node.js, Express, and MongoDB.

## Project Structure

```
drruthnjoroge/
├── frontend/                    # Angular Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── shared/      # Navbar, Footer
│   │   │   │   └── pages/       # Home, About, Services, Contact, Book Now, Admin
│   │   │   ├── services/        # API Services
│   │   │   ├── models/          # TypeScript Models
│   │   │   ├── app.module.ts
│   │   │   ├── app-routing.module.ts
│   │   │   └── app.component.ts
│   │   ├── main.ts
│   │   ├── index.html
│   │   └── styles.scss
│   ├── angular.json
│   ├── tsconfig.json
│   ├── package.json
│   └── README.md
│
└── backend/                     # Node.js/Express API
    ├── models/
    │   └── Appointment.js       # MongoDB Schema
    ├── routes/
    │   ├── appointments.js      # Booking API
    │   └── admin.js             # Admin Management API
    ├── middleware/
    │   └── auth.js              # JWT Authentication
    ├── server.js                # Express Server
    ├── package.json
    ├── .env.example
    └── README.md
```

## Features

### Frontend (Angular + Material)
- ✅ Responsive 5-page website
- ✅ Modern Material Design UI
- ✅ Medical spa themed palette (teal, cream, white)
- ✅ Reactive Forms with validation
- ✅ Material Date Picker for appointments
- ✅ Responsive Material Data Table
- ✅ Admin Dashboard with authentication
- ✅ CRUD operations for appointments

### Backend (Node.js + Express)
- ✅ RESTful API with Express
- ✅ MongoDB integration with Mongoose
- ✅ Request validation
- ✅ Authentication middleware
- ✅ CORS enabled
- ✅ Environment configuration with dotenv

### Database (MongoDB)
- ✅ Appointment schema with all required fields
- ✅ Status tracking (Pending, Completed, Cancelled)
- ✅ Timestamps for audit trail
- ✅ Email validation
- ✅ Phone and service type tracking

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Angular CLI (`npm install -g @angular/cli`)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
copy .env.example .env
```

4. Configure MongoDB connection in `.env`:
```
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/drruthnjoroge

# OR MongoDB Atlas (uncomment and update credentials)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/drruthnjoroge?retryWrites=true&w=majority
```

5. Start the backend server:
```bash
npm run dev
```

Server runs on `http://localhost:3000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Application runs on `http://localhost:4200`

## API Endpoints

### Appointments
- `POST /api/appointments` - Create new appointment
- `GET /api/appointments` - Get all appointments (admin only)
- `DELETE /api/appointments/:id` - Delete appointment (admin only)
- `PATCH /api/appointments/:id` - Update appointment status (admin only)

### Admin
- `POST /api/admin/login` - Admin login
- `GET /api/admin/appointments` - Fetch all appointments (protected)
- `DELETE /api/admin/appointments/:id` - Delete appointment (protected)
- `PATCH /api/admin/appointments/:id` - Update appointment (protected)

## Default Admin Credentials

```
Email: admin@drruthnjoroge.com
Password: admin123
```

⚠️ **IMPORTANT**: Change these credentials in production by updating the `.env` file

## MongoDB Setup Options

### Local MongoDB
1. Install MongoDB Community Edition
2. Start mongod service:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

### MongoDB Atlas (Free Tier)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create new project
4. Create M0 cluster (always free)
5. Generate connection string with username/password
6. Update `.env` with connection string

## Environment Variables

```
# MongoDB
MONGODB_URI=mongodb://localhost:27017/drruthnjoroge

# Server
PORT=3000
NODE_ENV=development

# JWT Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# Admin Account
ADMIN_EMAIL=admin@drruthnjoroge.com
ADMIN_PASSWORD=admin123
```

## Pages & Routes

### Patient Pages
- **Home** (`/`) - Hero section with service overview
- **About** (`/about`) - Dr. Ruth Njoroge's credentials and philosophy
- **Services** (`/services`) - Service cards with pricing
- **Contact** (`/contact`) - Contact info and embedded map (Mombasa, Kenya)
- **Book Now** (`/book-now`) - Reactive appointment form

### Admin
- **Dashboard** (`/admin/dashboard`) - Protected appointment management

## Technology Stack

### Frontend
- Angular 17
- Angular Material 17
- TypeScript 5.2
- RxJS 7.8
- Reactive Forms

### Backend
- Node.js
- Express 4.18
- Mongoose 8.0
- dotenv 16.3
- JWT for authentication

### Database
- MongoDB 6.0+
- Mongoose ODM

## Styling

All pages feature:
- Premium medical spa color scheme
  - Primary: Teal (#4a90a4, #7cb9d4)
  - Accent: Warm Cream (#d4a574)
  - Background: Clean White/Off-white
- Responsive Material Design
- Smooth animations and transitions
- Mobile-first approach

## Running Both Servers

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```

### Terminal 2 - Frontend
```bash
cd frontend
npm start
```

Then open browser to `http://localhost:4200`

## Building for Production

### Frontend
```bash
cd frontend
ng build --configuration production
```

Output: `frontend/dist/drruthnjoroge/`

### Backend
```bash
cd backend
npm start
```

Set `NODE_ENV=production` in `.env`

## Testing the Application

1. **Book Appointment**: Navigate to `/book-now`, fill form, click confirm
2. **Admin Login**: Go to `/admin/dashboard`, login with credentials
3. **Manage Appointments**: View, mark complete, or delete appointments
4. **View Data**: Check MongoDB to see saved appointments

## Support & Customization

### Modifying Services
Edit `frontend/src/app/components/pages/services/services.component.ts` - services array

### Changing Theme Colors
Edit `frontend/src/styles.scss` - update color variables

### Adding New Pages
1. Create component: `ng generate component components/pages/page-name`
2. Add route in `app-routing.module.ts`
3. Add navbar link in `navbar.component.ts`

## Security Notes

⚠️ For production:
- Change JWT_SECRET in `.env`
- Change ADMIN_PASSWORD
- Use HTTPS
- Implement rate limiting
- Add CORS restrictions
- Use environment-specific configs
- Store sensitive data securely
- Never commit `.env` file (use `.env.example` as template)

## License

This project is proprietary. All rights reserved to Dr. Ruth Njoroge Medical Spa.

---

**Created**: 2024  
**Version**: 1.0.0  
**Location**: Mombasa, Kenya
