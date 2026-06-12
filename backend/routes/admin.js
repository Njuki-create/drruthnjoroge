const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const {
  deleteAppointment,
  findAppointments,
  updateAppointmentStatus
} = require('../services/appointmentStore');

const router = express.Router();

// GET all appointments (protected)
router.get('/appointments', authMiddleware, async (req, res) => {
  try {
    const appointments = await findAppointments();
    res.json({
      total: appointments.length,
      appointments
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching appointments', error: err.message });
  }
});

// DELETE appointment (protected)
router.delete('/appointments/:id', authMiddleware, async (req, res) => {
  try {
    const appointment = await deleteAppointment(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting appointment', error: err.message });
  }
});

// PATCH - Update appointment status (protected)
router.patch('/appointments/:id', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    if (!['Pending', 'Completed', 'Cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }
    
    const appointment = await updateAppointmentStatus(req.params.id, status);
    
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    
    res.json({ message: 'Appointment updated successfully', appointment });
  } catch (err) {
    res.status(500).json({ message: 'Error updating appointment', error: err.message });
  }
});

// POST - Admin login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@drruthnjoroge.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

  if (email === adminEmail && password === adminPassword) {
    const token = 'admin-token-' + Date.now();
    res.json({
      message: 'Login successful',
      token,
      user: { email: adminEmail }
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
