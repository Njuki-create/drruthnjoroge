import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary" class="navbar">
      <div class="brand-group">
        <button class="brand" type="button" aria-label="Go to home page" (click)="navigate('/home')">
          <span class="brand-mark" aria-hidden="true">RN</span>
          <span class="logo">Dr. Ruth Njoroge, MD</span>
        </button>
        <span class="subtitle">Plastic & Reconstructive Surgery</span>
      </div>
      <span class="spacer"></span>
      <button
        mat-icon-button
        class="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        [attr.aria-expanded]="menuOpen"
        (click)="toggleMenu()">
        <span class="hamburger-line" aria-hidden="true"></span>
        <span class="hamburger-line" aria-hidden="true"></span>
        <span class="hamburger-line" aria-hidden="true"></span>
      </button>
      <nav class="nav-links" [class.open]="menuOpen" aria-label="Primary navigation">
        <button mat-button (click)="navigate('/home')">Home</button>
        <button mat-button (click)="navigate('/about')">About</button>
        <button mat-button (click)="navigate('/services')">Services</button>
        <button mat-button (click)="navigate('/contact')">Contact</button>
        <button mat-button (click)="navigate('/book-now')" color="accent">Schedule Consultation</button>
        <button mat-button (click)="navigate('/admin/dashboard')">Admin</button>
      </nav>
    </mat-toolbar>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(135deg, #003366 0%, #001a33 100%);
      min-height: 72px;
      padding: 10px 20px;
      position: relative;
      z-index: 10;
      gap: 12px;
      width: 100%;
    }
    .brand-group {
      display: flex;
      align-items: center;
      min-width: 0;
      flex: 1 1 auto;
      max-width: 520px;
    }
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin: 0 8px 0 0;
      padding: 0;
      border: 0;
      background: transparent;
      cursor: pointer;
      color: inherit;
      min-width: 0;
      max-width: 100%;
    }
    .brand-mark {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #d4af37;
      color: #003366;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0;
      flex: 0 0 auto;
    }
    .logo {
      font-size: 20px;
      font-weight: 600;
      color: #d4af37;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .subtitle {
      font-size: 12px;
      font-weight: 400;
      color: #ccc;
      border-left: 2px solid #d4af37;
      padding-left: 12px;
    }
    .spacer {
      flex: 1 1 auto;
      min-width: 8px;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 4px;
      flex: 0 1 auto;
      min-width: 0;
    }
    .nav-links button {
      margin: 0 8px;
      color: white;
      flex: 0 0 auto;
      min-width: 0;
    }
    .nav-links button[color="accent"] {
      background: #d4af37;
      color: #003366;
      font-weight: 600;
    }
    .menu-toggle {
      display: none;
      color: white;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 5px;
      width: 44px;
      height: 44px;
    }
    .hamburger-line {
      display: block;
      width: 24px;
      height: 2px;
      border-radius: 2px;
      background: #d4af37;
    }
    @media (max-width: 1180px) {
      .subtitle {
        display: none;
      }
      .nav-links button {
        margin: 0 2px;
        padding: 0 8px;
      }
    }
    @media (max-width: 980px) {
      .navbar {
        min-height: 64px;
        padding: 8px 12px;
      }
      .brand-group {
        max-width: calc(100% - 56px);
      }
      .brand-mark {
        width: 36px;
        height: 36px;
      }
      .logo {
        font-size: 16px;
        white-space: normal;
        line-height: 1.15;
      }
      .menu-toggle {
        display: inline-flex;
      }
      .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding: 8px 12px 14px;
        background: #001a33;
        box-shadow: 0 10px 18px rgba(0, 26, 51, 0.25);
        max-height: calc(100vh - 64px);
        overflow-y: auto;
      }
      .nav-links.open {
        display: flex;
      }
      .nav-links button {
        width: 100%;
        margin: 2px 0;
        justify-content: flex-start;
        min-height: 44px;
        flex: 0 0 auto;
        text-align: left;
      }
      .nav-links button[color="accent"] {
        justify-content: center;
        margin-top: 8px;
      }
    }
    @media (max-width: 380px) {
      .logo {
        font-size: 13px;
        overflow-wrap: anywhere;
      }
      .brand-mark {
        width: 32px;
        height: 32px;
        font-size: 12px;
      }
    }
  `]
})
export class NavbarComponent {
  menuOpen = false;

  constructor(private router: Router) { }

  navigate(route: string): void {
    this.menuOpen = false;
    this.router.navigate([route]);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
