import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppointmentService } from '../../../services/appointment.service';
import { Appointment } from '../../../models/appointment.model';

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <div class="admin-container">
      <div *ngIf="!isLoggedIn" class="login-section">
        <mat-card class="login-card">
          <mat-card-header class="login-card-header">
            <div class="login-heading">
              <h2>Admin Login</h2>
              <p>Access appointment management dashboard</p>
            </div>
          </mat-card-header>
          
          <mat-card-content>
            <form [formGroup]="loginForm" (ngSubmit)="onLogin()" class="login-form">
              <mat-form-field appearance="outline" class="form-field">
                <mat-label>Admin Email</mat-label>
                <input matInput 
                       formControlName="email" 
                       type="email"
                       placeholder="admin@drruthnjoroge.com"
                       required>
                <mat-error *ngIf="loginForm.get('email')?.hasError('required')">
                  Email is required
                </mat-error>
              </mat-form-field>
              
              <mat-form-field appearance="outline" class="form-field">
                <mat-label>Password</mat-label>
                <input matInput 
                       formControlName="password" 
                       type="password"
                       placeholder="Enter password"
                       required>
                <mat-error *ngIf="loginForm.get('password')?.hasError('required')">
                  Password is required
                </mat-error>
              </mat-form-field>
              
              <button mat-raised-button color="primary" type="submit" 
                      [disabled]="!loginForm.valid || isLoggingIn" class="login-btn">
                {{ isLoggingIn ? 'Logging in...' : 'Login' }}
              </button>
            </form>
          </mat-card-content>
        </mat-card>
      </div>
      
      <div *ngIf="isLoggedIn" class="dashboard-section">
        <div class="dashboard-header">
          <h1>Appointments Dashboard</h1>
          <button mat-raised-button color="warn" (click)="onLogout()">Logout</button>
        </div>
        
        <div class="table-container">
          <mat-table #table [dataSource]="dataSource" matSort class="appointment-table">
            <!-- Name Column -->
            <ng-container matColumnDef="name">
              <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>
              <mat-cell *matCellDef="let element">{{ element.name }}</mat-cell>
            </ng-container>
            
            <!-- Email Column -->
            <ng-container matColumnDef="email">
              <mat-header-cell *matHeaderCellDef mat-sort-header>Email</mat-header-cell>
              <mat-cell *matCellDef="let element">{{ element.email }}</mat-cell>
            </ng-container>
            
            <!-- Phone Column -->
            <ng-container matColumnDef="phone">
              <mat-header-cell *matHeaderCellDef mat-sort-header>Phone</mat-header-cell>
              <mat-cell *matCellDef="let element">{{ element.phone }}</mat-cell>
            </ng-container>
            
            <!-- Service Column -->
            <ng-container matColumnDef="service">
              <mat-header-cell *matHeaderCellDef mat-sort-header>Service</mat-header-cell>
              <mat-cell *matCellDef="let element">{{ element.service }}</mat-cell>
            </ng-container>
            
            <!-- Date Column -->
            <ng-container matColumnDef="appointmentDate">
              <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>
              <mat-cell *matCellDef="let element">
                {{ element.appointmentDate | date:'short' }}
              </mat-cell>
            </ng-container>
            
            <!-- Status Column -->
            <ng-container matColumnDef="status">
              <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>
              <mat-cell *matCellDef="let element">
                <span class="status-badge" [ngClass]="'status-' + element.status">
                  {{ element.status }}
                </span>
              </mat-cell>
            </ng-container>
            
            <!-- Actions Column -->
            <ng-container matColumnDef="actions">
              <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>
              <mat-cell *matCellDef="let element">
                <button mat-icon-button 
                        (click)="markCompleted(element._id || '')"
                        title="Mark as Completed"
                        [disabled]="element.status === 'Completed'">
                  <mat-icon>check_circle</mat-icon>
                </button>
                <button mat-icon-button 
                        color="warn"
                        (click)="deleteAppointment(element._id || '')"
                        title="Delete">
                  <mat-icon>delete</mat-icon>
                </button>
              </mat-cell>
            </ng-container>
            
            <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
            <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
          </mat-table>
          
          <mat-paginator [pageSizeOptions]="[5, 10, 25, 50]" 
                         showFirstLastButtons
                         aria-label="Select page of appointments">
          </mat-paginator>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .admin-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: clamp(24px, 5vw, 40px) 20px;
    }
    .login-section {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: min(500px, calc(100svh - 160px));
    }
    .login-card {
      width: 100%;
      max-width: 400px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      min-width: 0;
    }
    .login-card-header {
      display: block;
      padding: 24px 24px 8px;
      min-width: 0;
    }
    .login-heading {
      display: grid;
      gap: 8px;
      min-width: 0;
      width: 100%;
      text-align: center;
    }
    .login-card h2 {
      color: #4a90a4;
      margin: 0;
      font-size: clamp(24px, 6vw, 30px);
      line-height: 1.15;
      overflow-wrap: anywhere;
    }
    .login-card p {
      color: #7cb9d4;
      margin: 0;
      font-size: clamp(14px, 3.5vw, 16px);
      line-height: 1.45;
      overflow-wrap: anywhere;
    }
    .login-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .form-field {
      width: 100%;
    }
    .login-btn {
      padding: 12px;
      font-size: 16px;
    }
    .dashboard-section {
      animation: fadeIn 0.3s ease-in;
      min-width: 0;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      margin-bottom: 30px;
      padding: 20px;
      background: linear-gradient(135deg, #4a90a4 0%, #7cb9d4 100%);
      color: white;
      border-radius: 8px;
      min-width: 0;
    }
    .dashboard-header h1 {
      margin: 0;
      font-size: clamp(24px, 5vw, 32px);
      line-height: 1.15;
      min-width: 0;
      overflow-wrap: anywhere;
      word-break: normal;
    }
    .dashboard-header button {
      flex: 0 0 auto;
      max-width: 100%;
    }
    .table-container {
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
    .appointment-table {
      width: 100%;
      min-width: 900px;
    }
    .appointment-table th {
      background: #f5f5f5;
      font-weight: 600;
      color: #4a90a4;
    }
    .appointment-table tr:hover {
      background: #f9f9f9;
    }
    .status-badge {
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }
    .status-Pending {
      background: #fff3cd;
      color: #856404;
    }
    .status-Completed {
      background: #d4edda;
      color: #155724;
    }
    .status-Cancelled {
      background: #f8d7da;
      color: #721c24;
    }
    button[mat-icon-button] {
      margin: 0 4px;
    }
    @media (max-width: 700px) {
      .admin-container {
        padding-left: 16px;
        padding-right: 16px;
      }
      .login-section {
        min-height: calc(100svh - 140px);
        align-items: flex-start;
        padding-top: 24px;
      }
      .login-card {
        max-width: 100%;
      }
      .login-card-header {
        padding: 22px 18px 8px;
      }
      .dashboard-header {
        flex-direction: column;
        align-items: stretch;
        padding: 18px;
        gap: 14px;
      }
      .dashboard-header h1 {
        text-align: center;
        font-size: clamp(22px, 8vw, 28px);
      }
      .dashboard-header button {
        width: 100%;
        min-height: 44px;
      }
      .table-container {
        margin-left: -16px;
        margin-right: -16px;
        border-radius: 0;
      }
      .appointment-table {
        min-width: 820px;
      }
      .status-badge {
        display: inline-block;
      }
    }
  `]
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<Appointment>;

  isLoggedIn = false;
  isLoggingIn = false;
  loginForm!: FormGroup;
  
  dataSource = new MatTableDataSource<Appointment>([]);
  displayedColumns: string[] = ['name', 'email', 'phone', 'service', 'appointmentDate', 'status', 'actions'];
  
  private adminToken: string | null = null;

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initializeLoginForm();
    this.checkExistingLogin();
  }

  initializeLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['admin@drruthnjoroge.com', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  checkExistingLogin(): void {
    const token = localStorage.getItem('adminToken');
    if (token) {
      this.adminToken = token;
      this.isLoggedIn = true;
      this.loadAppointments();
    }
  }

  onLogin(): void {
    if (this.loginForm.valid && !this.isLoggingIn) {
      this.isLoggingIn = true;
      const { email, password } = this.loginForm.value;

      this.appointmentService.adminLogin(email, password).subscribe(
        (response) => {
          this.adminToken = response.token;
          if (this.adminToken) {
            localStorage.setItem('adminToken', this.adminToken);
          }
          this.isLoggedIn = true;
          this.snackBar.open('✅ Login successful!', 'Close', { duration: 3000 });
          this.loadAppointments();
          this.isLoggingIn = false;
        },
        (error) => {
          this.snackBar.open('❌ Invalid credentials', 'Close', { duration: 3000 });
          this.isLoggingIn = false;
        }
      );
    }
  }

  loadAppointments(): void {
    if (!this.adminToken) return;

    this.appointmentService.getAppointments(this.adminToken).subscribe(
      (response) => {
        this.dataSource.data = response.appointments;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        this.snackBar.open('❌ Error loading appointments', 'Close', { duration: 3000 });
        console.error('Load error:', error);
      }
    );
  }

  markCompleted(id: string): void {
    if (!this.adminToken) return;

    this.appointmentService.updateAppointmentStatus(id, 'Completed', this.adminToken).subscribe(
      () => {
        this.snackBar.open('✅ Appointment marked as completed', 'Close', { duration: 3000 });
        this.loadAppointments();
      },
      (error) => {
        this.snackBar.open('❌ Error updating appointment', 'Close', { duration: 3000 });
      }
    );
  }

  deleteAppointment(id: string): void {
    if (!this.adminToken) return;
    
    if (confirm('Are you sure you want to delete this appointment?')) {
      this.appointmentService.deleteAppointment(id, this.adminToken).subscribe(
        () => {
          this.snackBar.open('✅ Appointment deleted', 'Close', { duration: 3000 });
          this.loadAppointments();
        },
        (error) => {
          this.snackBar.open('❌ Error deleting appointment', 'Close', { duration: 3000 });
        }
      );
    }
  }

  onLogout(): void {
    localStorage.removeItem('adminToken');
    this.adminToken = null;
    this.isLoggedIn = false;
    this.loginForm.reset();
    this.dataSource.data = [];
    this.snackBar.open('Logged out successfully', 'Close', { duration: 3000 });
  }
}
