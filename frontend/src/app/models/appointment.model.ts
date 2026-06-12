export interface Appointment {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  appointmentDate: Date;
  notes?: string;
  status?: 'Pending' | 'Completed' | 'Cancelled';
  createdAt?: Date;
  updatedAt?: Date;
}
