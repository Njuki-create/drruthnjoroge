import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = '/api/appointments';
  private adminUrl = '/api/admin';

  constructor(private http: HttpClient) { }

  bookAppointment(appointment: Appointment): Observable<any> {
    return this.http.post(this.apiUrl, appointment);
  }

  getAppointments(token: string): Observable<any> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${this.adminUrl}/appointments`, { headers });
  }

  deleteAppointment(id: string, token: string): Observable<any> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete(`${this.adminUrl}/appointments/${id}`, { headers });
  }

  updateAppointmentStatus(id: string, status: string, token: string): Observable<any> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.patch(`${this.adminUrl}/appointments/${id}`, { status }, { headers });
  }

  adminLogin(email: string, password: string): Observable<any> {
    return this.http.post(`${this.adminUrl}/login`, { email, password });
  }
}
