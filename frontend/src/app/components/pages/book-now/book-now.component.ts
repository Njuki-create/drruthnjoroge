import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-book-now',
  template: `
    <div class="book-container">
      <div class="book-header">
        <h1>Book Your Appointment</h1>
        <p>Your request is confidential. The team will contact you to confirm availability and next steps.</p>
      </div>

      <div class="booking-assurance" aria-label="Booking reassurance">
        <div>
          <span>Private request</span>
        </div>
        <div>
          <span>Confirmation follow-up</span>
        </div>
        <div>
          <span>Consultation-first care</span>
        </div>
      </div>
      
      <mat-card class="booking-form-card">
        <mat-card-header>
          <h2>Appointment Details</h2>
        </mat-card-header>
        
        <mat-card-content>
          <form [formGroup]="appointmentForm" (ngSubmit)="onSubmit()" class="booking-form">
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Full Name</mat-label>
              <input matInput formControlName="name" placeholder="Your full name" required>
              <mat-error *ngIf="appointmentForm.get('name')?.hasError('required')">
                Name is required
              </mat-error>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email" type="email" placeholder="your.email@example.com" required>
              <mat-error *ngIf="appointmentForm.get('email')?.hasError('required')">
                Email is required
              </mat-error>
              <mat-error *ngIf="appointmentForm.get('email')?.hasError('email')">
                Please enter a valid email
              </mat-error>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Phone Number</mat-label>
              <input matInput formControlName="phone" placeholder="+254 (7XX) XXX-XXX" required>
              <mat-error *ngIf="appointmentForm.get('phone')?.hasError('required')">
                Phone number is required
              </mat-error>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Select Service</mat-label>
              <mat-select formControlName="service" required>
                <mat-optgroup label="Available Services">
                  <mat-option value="Breast Procedures">Breast Procedures</mat-option>
                  <mat-option value="Body Contouring">Body Contouring</mat-option>
                  <mat-option value="Skin & Minimally Invasive Treatments">Skin & Minimally Invasive Treatments</mat-option>
                  <mat-option value="Reconstructive Surgery">Reconstructive Surgery</mat-option>
                  <mat-option value="Specialized Services">Specialized Services</mat-option>
                  <mat-option value="Hair Restoration Services">Hair Restoration Services</mat-option>
                </mat-optgroup>
              </mat-select>
              <mat-error *ngIf="appointmentForm.get('service')?.hasError('required')">
                Please select a service
              </mat-error>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Preferred Appointment Date</mat-label>
              <input matInput [matDatepicker]="picker" formControlName="appointmentDate" (click)="picker.open()" required>
              <mat-datepicker #picker></mat-datepicker>
              <mat-error *ngIf="appointmentForm.get('appointmentDate')?.hasError('required')">
                Please select a date
              </mat-error>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="form-field full-width">
              <mat-label>Additional Notes (Optional)</mat-label>
              <textarea matInput formControlName="notes" 
                        placeholder="Any special requests or health concerns?" 
                        rows="4"></textarea>
            </mat-form-field>
            
            <div class="form-actions">
              <button mat-raised-button color="accent" type="submit" [disabled]="!appointmentForm.valid">
                Confirm Booking
              </button>
              <button mat-stroked-button type="button" (click)="resetForm()">
                Clear Form
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
      
      <div class="info-box">
        <mat-card>
          <mat-card-content>
            <h3>Important Information</h3>
            <ul>
              <li>Please arrive 10 minutes early for your appointment</li>
              <li>Bring a valid ID and any relevant medical documents</li>
              <li>Cancellations must be made 24 hours in advance</li>
              <li>We accept cash, and mobile payments</li>
            </ul>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .book-container {
      max-width: 800px;
      margin: 0 auto;
      padding: clamp(24px, 5vw, 40px) 20px;
    }
    .book-header {
      text-align: center;
      margin-bottom: clamp(28px, 5vw, 40px);
      padding: clamp(30px, 6vw, 40px) 20px;
      background: linear-gradient(135deg, #003366 0%, #001a33 100%);
      border-radius: 8px;
      color: white;
    }
    .book-header h1 {
      color: #fff;
      font-size: clamp(30px, 6vw, 40px);
      margin-bottom: 10px;
      line-height: 1.1;
    }
    .book-header p {
      color: rgba(255, 255, 255, 0.86);
      font-size: clamp(15px, 3vw, 18px);
      max-width: 620px;
      margin-left: auto;
      margin-right: auto;
    }
    .booking-assurance {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
      margin-bottom: 24px;
    }
    .booking-assurance div {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #fff;
      border: 1px solid #e6ebef;
      border-left: 4px solid #d4af37;
      border-radius: 8px;
      padding: 14px 16px;
      color: #003366;
      font-weight: 700;
      box-shadow: 0 8px 18px rgba(0, 51, 102, 0.07);
      min-width: 0;
    }
    .booking-assurance span {
      min-width: 0;
      line-height: 1.25;
      overflow-wrap: anywhere;
    }
    .booking-form-card {
      margin-bottom: 30px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border-left: 4px solid #d4af37;
      min-width: 0;
    }
    .booking-form-card mat-card-header,
    .booking-form-card mat-card-content {
      min-width: 0;
    }
    .booking-form-card h2 {
      color: #003366;
      font-size: clamp(22px, 5vw, 28px);
      line-height: 1.2;
    }
    .booking-form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      min-width: 0;
    }
    .form-field {
      grid-column: span 1;
      min-width: 0;
    }
    .form-field.full-width {
      grid-column: span 2;
    }
    @media (max-width: 600px) {
      .book-container {
        padding-left: 16px;
        padding-right: 16px;
      }
      .booking-form {
        grid-template-columns: 1fr;
        gap: 14px;
      }
      .booking-assurance {
        grid-template-columns: 1fr;
      }
      .form-field.full-width {
        grid-column: span 1;
      }
    }
    .form-actions {
      grid-column: span 2;
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-top: 20px;
      min-width: 0;
    }
    @media (max-width: 600px) {
      .form-actions {
        grid-column: span 1;
        flex-direction: column;
      }
    }
    .form-actions button {
      padding: 12px 40px;
      font-size: 16px;
      min-height: 48px;
      max-width: 100%;
      white-space: normal;
    }
    @media (max-width: 600px) {
      .form-actions button {
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
      }
    }
    .info-box {
      margin-top: 30px;
    }
    .info-box mat-card {
      min-width: 0;
    }
    .info-box h3 {
      color: #4a90a4;
      margin-bottom: 15px;
    }
    .info-box ul {
      list-style: none;
      padding: 0;
    }
    .info-box li {
      padding: 10px 0;
      color: #666;
      border-bottom: 1px solid #e0e0e0;
    }
    .info-box li:last-child {
      border-bottom: none;
    }
    .info-box li:before {
      content: "✓ ";
      color: #7cb9d4;
      font-weight: bold;
    }
  `]
})
export class BookNowComponent implements OnInit {
  appointmentForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.appointmentForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      service: ['', [Validators.required]],
      appointmentDate: ['', [Validators.required]],
      notes: ['']
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      const appointment = {
        ...this.appointmentForm.value,
        appointmentDate: this.appointmentForm.value.appointmentDate.toISOString()
      };

      this.appointmentService.bookAppointment(appointment).subscribe(
        (response) => {
          this.snackBar.open('Appointment booked successfully!', 'Close', { duration: 5000 });
          this.resetForm();
          this.isSubmitting = false;
        },
        (error) => {
          const message = error?.error?.message || error?.error?.error || 'Error booking appointment. Please try again.';
          this.snackBar.open(message, 'Close', { duration: 8000 });
          console.error('Booking error:', error);
          this.isSubmitting = false;
        }
      );
    }
  }

  resetForm(): void {
    this.appointmentForm.reset();
  }
}
