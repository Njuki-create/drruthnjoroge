import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-book-now',
  template: `
    <div class="book-container">
      <div class="book-header">
        <p class="eyebrow">Appointments</p>
        <h1>Book Your <em>Consultation</em></h1>
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

      <section class="booking-primer">
        <div>
          <p class="eyebrow">Before You Book</p>
          <h2>Your consultation is the beginning of a considered plan.</h2>
        </div>
        <p>
          Use this form to share the area you would like to discuss. The appointment request does not lock you into a
          procedure; it starts a private conversation about suitability, expectations, recovery and the safest next step.
        </p>
      </section>
      
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
                  <mat-option value="Breast Reduction">Breast Reduction</mat-option>
                  <mat-option value="Breast Lift">Breast Lift</mat-option>
                  <mat-option value="Breast Reconstruction">Breast Reconstruction</mat-option>
                  <mat-option value="Body Contouring">Body Contouring</mat-option>
                  <mat-option value="Tummy Tuck / Abdominoplasty">Tummy Tuck / Abdominoplasty</mat-option>
                  <mat-option value="Liposuction">Liposuction</mat-option>
                  <mat-option value="Skin & Minimally Invasive Treatments">Skin & Minimally Invasive Treatments</mat-option>
                  <mat-option value="Botox / Fillers / PRP">Botox / Fillers / PRP</mat-option>
                  <mat-option value="Reconstructive Surgery">Reconstructive Surgery</mat-option>
                  <mat-option value="Scar / Keloid / Wound Care">Scar / Keloid / Wound Care</mat-option>
                  <mat-option value="Specialized Services">Specialized Services</mat-option>
                  <mat-option value="Hair Restoration Services">Hair Restoration Services</mat-option>
                  <mat-option value="Not Sure Yet">Not Sure Yet</mat-option>
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
            <h3>How to Prepare</h3>
            <ul>
              <li>Arrive 10 minutes early so your consultation can begin calmly and privately</li>
              <li>Bring a valid ID, relevant medical documents, previous procedure notes or imaging where available</li>
              <li>Write down your goals, concerns, medications, allergies and any questions you want answered</li>
              <li>Cancellations or rescheduling requests should be made 24 hours in advance</li>
              <li>Payments can be completed by cash or mobile payment where applicable</li>
            </ul>
          </mat-card-content>
        </mat-card>
      </div>

      <section class="expectations">
        <article>
          <span>01</span>
          <h3>Private review</h3>
          <p>Your concern, goals and medical background are reviewed before any recommendation is made.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Clear options</h3>
          <p>You will understand suitable treatments, alternatives, downtime and the likely sequence of care.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Next-step guidance</h3>
          <p>The practice will advise what to prepare, whether follow-up is needed and how to proceed safely.</p>
        </article>
      </section>

      <section class="consultation-expect">
        <div>
          <p class="eyebrow">During Consultation</p>
          <h2>What to expect in the room.</h2>
          <p>
            Your visit is a private planning conversation. You can ask questions, discuss fears, review alternatives
            and understand what is realistic before making any decision.
          </p>
        </div>
        <div class="expect-grid">
          <article *ngFor="let item of consultationExpectations">
            <span>{{ item.no }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section class="after-submit">
        <div>
          <p class="eyebrow">After You Submit</p>
          <h2>What happens once your request is received.</h2>
        </div>
        <div class="submit-steps">
          <article *ngFor="let step of afterSubmitSteps">
            <span>{{ step.no }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </article>
        </div>
      </section>

      <section class="booking-faq">
        <div>
          <p class="eyebrow">Booking FAQ</p>
          <h2>Helpful details before your consultation.</h2>
        </div>
        <div class="booking-faq-list">
          <article *ngFor="let item of bookingFaqs">
            <h3>{{ item.q }}</h3>
            <p>{{ item.a }}</p>
          </article>
        </div>
      </section>

      <p class="booking-note">
        This appointment request is not a medical diagnosis or a guarantee of treatment. Final recommendations,
        suitability and recovery expectations are confirmed during consultation.
      </p>
    </div>
  `,
  styles: [`
    .book-container {
      max-width: 920px;
      margin: 0 auto;
      padding: clamp(28px, 6vw, 64px) 20px 86px;
    }
    .book-header {
      text-align: center;
      margin-bottom: clamp(32px, 6vw, 48px);
      padding: clamp(42px, 8vw, 76px) 0;
      border-bottom: 1px solid var(--bdr);
    }
    .eyebrow {
      font-size: 0.68rem;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      color: var(--rose);
      line-height: 1.5;
      margin-bottom: 14px;
    }
    .book-header h1 {
      color: var(--char);
      font-size: clamp(2.35rem, 6vw, 4rem);
      margin-bottom: 14px;
      line-height: 1.1;
    }
    .book-header h1 em {
      color: var(--rose);
      font-style: italic;
    }
    .book-header p {
      color: var(--slate-m);
      font-size: clamp(0.95rem, 2vw, 1.08rem);
      max-width: 620px;
      margin-left: auto;
      margin-right: auto;
    }
    .booking-assurance {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1px;
      margin-bottom: 24px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .booking-assurance div {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #fff;
      border: 0;
      border-radius: 0;
      padding: 14px 16px;
      color: var(--char);
      font-weight: 500;
      box-shadow: none;
      min-width: 0;
    }
    .booking-assurance span {
      min-width: 0;
      line-height: 1.25;
      overflow-wrap: anywhere;
    }
    .booking-primer {
      display: grid;
      grid-template-columns: minmax(240px, 0.85fr) minmax(280px, 1.15fr);
      gap: clamp(22px, 5vw, 48px);
      align-items: end;
      margin-bottom: 26px;
      padding: clamp(28px, 5vw, 42px);
      background: var(--off);
      border: 1px solid var(--bdr);
    }
    .booking-primer h2 {
      color: var(--char);
      font-size: clamp(1.7rem, 4vw, 2.4rem);
      line-height: 1.12;
    }
    .booking-primer p:not(.eyebrow) {
      font-size: 0.93rem;
      line-height: 1.8;
    }
    .booking-form-card {
      margin-bottom: 30px;
      box-shadow: var(--shadow);
      min-width: 0;
    }
    .booking-form-card mat-card-header {
      padding: 28px 28px 0;
    }
    .booking-form-card mat-card-content {
      padding: 22px 28px 28px;
    }
    .booking-form-card mat-card-header,
    .booking-form-card mat-card-content {
      min-width: 0;
    }
    .booking-form-card h2 {
      color: var(--char);
      font-size: clamp(1.6rem, 5vw, 2.2rem);
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
      font-size: 0.9rem;
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
      color: var(--char);
      margin-bottom: 15px;
      font-size: 1.3rem;
    }
    .info-box ul {
      list-style: none;
      padding: 0;
    }
    .info-box li {
      padding: 10px 0;
      color: var(--slate-m);
      border-bottom: 1px solid var(--bdr);
    }
    .info-box li:last-child {
      border-bottom: none;
    }
    .info-box li:before {
      content: "✓ ";
      color: var(--rose);
      font-weight: bold;
    }
    .expectations {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1px;
      margin-top: 30px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .expectations article {
      background: #fff;
      padding: 26px 24px;
      min-width: 0;
    }
    .expectations span {
      display: block;
      color: var(--rose);
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.4rem;
      margin-bottom: 8px;
    }
    .expectations h3 {
      color: var(--char);
      font-size: 1.22rem;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .expectations p {
      font-size: 0.86rem;
      line-height: 1.7;
    }
    .after-submit,
    .booking-faq,
    .consultation-expect {
      display: grid;
      grid-template-columns: minmax(240px, 0.85fr) minmax(280px, 1.15fr);
      gap: clamp(22px, 5vw, 48px);
      align-items: start;
      margin-top: clamp(32px, 6vw, 48px);
      padding: clamp(28px, 5vw, 42px);
      background: var(--off);
      border: 1px solid var(--bdr);
    }
    .booking-faq {
      background: #fff;
    }
    .after-submit h2,
    .booking-faq h2,
    .consultation-expect h2 {
      color: var(--char);
      font-size: clamp(1.7rem, 4vw, 2.4rem);
      line-height: 1.12;
    }
    .submit-steps,
    .booking-faq-list,
    .expect-grid {
      display: grid;
      gap: 1px;
      background: var(--bdr);
      border: 1px solid var(--bdr);
    }
    .submit-steps article,
    .booking-faq-list article,
    .expect-grid article {
      background: #fff;
      padding: 24px 28px;
    }
    .consultation-expect > div > p:not(.eyebrow) {
      font-size: 0.9rem;
      line-height: 1.78;
      margin-top: 12px;
    }
    .submit-steps span,
    .expect-grid span {
      display: block;
      color: var(--rose);
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.4rem;
      margin-bottom: 8px;
    }
    .submit-steps h3,
    .booking-faq-list h3,
    .expect-grid h3 {
      color: var(--char);
      font-size: 1.2rem;
      line-height: 1.2;
      margin-bottom: 8px;
    }
    .submit-steps p,
    .booking-faq-list p,
    .expect-grid p {
      font-size: 0.86rem;
      line-height: 1.7;
    }
    .booking-note {
      margin: 22px auto 0;
      max-width: 760px;
      text-align: center;
      font-size: 0.78rem;
      line-height: 1.7;
      color: var(--slate-m);
    }
    @media (max-width: 720px) {
      .booking-primer,
      .expectations,
      .after-submit,
      .booking-faq,
      .consultation-expect {
        grid-template-columns: 1fr;
      }
      .submit-steps article,
      .booking-faq-list article,
      .expect-grid article {
        padding-left: 22px;
        padding-right: 22px;
      }
    }
  `]
})
export class BookNowComponent implements OnInit {
  appointmentForm!: FormGroup;
  isSubmitting = false;

  afterSubmitSteps = [
    { no: '01', title: 'Request review', text: 'The practice reviews your selected service, preferred date and notes so the follow-up can be relevant.' },
    { no: '02', title: 'Confirmation contact', text: 'You will be contacted to confirm availability, timing and any details needed before the visit.' },
    { no: '03', title: 'Consultation preparation', text: 'You may be advised to bring medical documents, previous procedure records or images where useful.' },
    { no: '04', title: 'Private consultation', text: 'Your goals, suitability, risks, alternatives and recovery expectations are discussed before any plan is made.' }
  ];

  bookingFaqs = [
    { q: 'Can I book if I am unsure which service I need?', a: 'Yes. Choose the closest category and use the notes field to describe your concern or goal.' },
    { q: 'Can I include sensitive information in the notes?', a: 'You can share a brief summary, but detailed medical concerns can also be discussed privately during follow-up.' },
    { q: 'Does submitting the form confirm my appointment?', a: 'No. The request is reviewed and the team contacts you to confirm availability and next steps.' },
    { q: 'Should I bring photos or medical records?', a: 'Bring relevant records, previous procedure notes, medication lists or images if they help explain your concern.' }
  ];

  consultationExpectations = [
    { no: '01', title: 'Medical context', text: 'Health history, medications, previous procedures and healing factors are reviewed.' },
    { no: '02', title: 'Goal mapping', text: 'You explain what bothers you, what outcome you prefer and what you want to avoid.' },
    { no: '03', title: 'Suitability check', text: 'Options are discussed honestly, including non-surgical alternatives or waiting when safer.' },
    { no: '04', title: 'Recovery planning', text: 'Downtime, follow-up, scar care, comfort and practical preparation are explained.' }
  ];

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
