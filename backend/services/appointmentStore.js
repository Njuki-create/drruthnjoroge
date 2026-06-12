const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const Appointment = require('../models/Appointment');

const dataDir = path.join(__dirname, '..', 'data');
const dataFile = path.join(dataDir, 'appointments.json');

function shouldUseFileStore() {
  return !process.env.NETLIFY && mongoose.connection.readyState !== 1;
}

async function readAppointments() {
  try {
    const content = await fs.readFile(dataFile, 'utf8');
    return JSON.parse(content);
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function writeAppointments(appointments) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(appointments, null, 2));
}

async function createAppointment(data) {
  if (!shouldUseFileStore()) {
    const appointment = new Appointment(data);
    await appointment.save();
    return appointment;
  }

  const now = new Date().toISOString();
  const appointment = {
    _id: crypto.randomUUID(),
    ...data,
    appointmentDate: new Date(data.appointmentDate).toISOString(),
    status: 'Pending',
    createdAt: now,
    updatedAt: now
  };

  const appointments = await readAppointments();
  appointments.unshift(appointment);
  await writeAppointments(appointments);
  return appointment;
}

async function findAppointments() {
  if (!shouldUseFileStore()) {
    return Appointment.find().sort({ createdAt: -1 });
  }

  const appointments = await readAppointments();
  return appointments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

async function deleteAppointment(id) {
  if (!shouldUseFileStore()) {
    return Appointment.findByIdAndDelete(id);
  }

  const appointments = await readAppointments();
  const appointment = appointments.find(item => item._id === id);
  if (!appointment) return null;

  await writeAppointments(appointments.filter(item => item._id !== id));
  return appointment;
}

async function updateAppointmentStatus(id, status) {
  if (!shouldUseFileStore()) {
    return Appointment.findByIdAndUpdate(id, { status }, { new: true });
  }

  const appointments = await readAppointments();
  const index = appointments.findIndex(item => item._id === id);
  if (index === -1) return null;

  appointments[index] = {
    ...appointments[index],
    status,
    updatedAt: new Date().toISOString()
  };

  await writeAppointments(appointments);
  return appointments[index];
}

module.exports = {
  createAppointment,
  findAppointments,
  deleteAppointment,
  updateAppointmentStatus,
  shouldUseFileStore
};
