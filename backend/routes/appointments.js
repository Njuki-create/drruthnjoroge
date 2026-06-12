const express = require('express');
const { body, validationResult } = require('express-validator');
const { createAppointment } = require('../services/appointmentStore');

const router = express.Router();

function formatDateForNotification(dateValue) {
  if (!dateValue) return 'Not provided';

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return String(dateValue);

  return new Intl.DateTimeFormat('en-KE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Africa/Nairobi'
  }).format(date);
}

function formatTimeForNotification(dateValue, bookingTime) {
  if (bookingTime) return bookingTime;
  if (!dateValue) return 'Not provided';

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return 'Not provided';

  return new Intl.DateTimeFormat('en-KE', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Africa/Nairobi'
  }).format(date);
}

function buildNotificationPayload(appointment, requestBody) {
  return {
    clientName: requestBody.clientName || appointment.name,
    clientPhone: requestBody.clientPhone || appointment.phone,
    bookingDate: requestBody.bookingDate || formatDateForNotification(appointment.appointmentDate),
    bookingTime: requestBody.bookingTime || formatTimeForNotification(appointment.appointmentDate, requestBody.bookingTime),
    serviceRequested: requestBody.serviceRequested || appointment.service
  };
}

function buildAppointmentData(requestBody) {
  const appointmentDate = requestBody.appointmentDate || requestBody.bookingDate;

  return {
    name: requestBody.name || requestBody.clientName,
    email: requestBody.email,
    phone: requestBody.phone || requestBody.clientPhone,
    service: requestBody.service || requestBody.serviceRequested,
    appointmentDate,
    notes: requestBody.notes || ''
  };
}

// POST - Create new appointment
router.post(
  '/',
  [
    body().custom((value) => {
      if (!value.name && !value.clientName) {
        throw new Error('Client name is required');
      }
      return true;
    }),
    body('email').isEmail().withMessage('Valid email is required'),
    body().custom((value) => {
      if (!value.phone && !value.clientPhone) {
        throw new Error('Client phone is required');
      }
      return true;
    }),
    body().custom((value) => {
      if (!value.service && !value.serviceRequested) {
        throw new Error('Service requested is required');
      }
      return true;
    }),
    body().custom((value) => {
      if (!value.appointmentDate && !value.bookingDate) {
        throw new Error('Booking date is required');
      }

      const bookingDate = value.appointmentDate || value.bookingDate;
      if (Number.isNaN(new Date(bookingDate).getTime())) {
        throw new Error('Valid booking date is required');
      }

      return true;
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const appointment = await createAppointment(buildAppointmentData(req.body));

      const notificationPayload = buildNotificationPayload(appointment, req.body);
      console.log('New booking request received:', notificationPayload);

      res.status(201).json({
        message: 'Appointment booked successfully!',
        appointment
      });
    } catch (err) {
      res.status(500).json({ message: 'Error booking appointment', error: err.message });
    }
  }
);

module.exports = router;
