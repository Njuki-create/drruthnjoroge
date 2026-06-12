const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    service: {
      type: String,
      required: true,
      enum: [
        'Breast Procedures',
        'Body Contouring',
        'Skin & Minimally Invasive Treatments',
        'Reconstructive Surgery',
        'Specialized Services',
        'Hair Restoration Services',
        'Facial Treatments',
        'Hair & Scalp Care',
        'Body Treatments',
        'Dermatological Services',
        'Wellness Consultations'
      ]
    },
    appointmentDate: {
      type: Date,
      required: true
    },
    notes: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['Pending', 'Completed', 'Cancelled'],
      default: 'Pending'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
