import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  template: `
    <header class="navbar">
      <nav class="nav-shell" aria-label="Primary navigation">
        <div class="nav-left">
          <button type="button" (click)="navigate('/services')">Services</button>
          <button type="button" (click)="navigate('/about')">About</button>
          <button type="button" (click)="navigate('/contact')">Contact</button>
        </div>

        <button class="brand" type="button" aria-label="Go to home page" (click)="navigate('/home')">
          Dr. Ruth <span>·</span> Njoroge
        </button>

        <div class="nav-right">
          <button class="admin-link" type="button" (click)="navigate('/admin/dashboard')">Admin</button>
          <button class="book-link" type="button" (click)="navigate('/book-now')">Book Now</button>
          <button
            class="hamburger"
            type="button"
            aria-label="Toggle navigation menu"
            [attr.aria-expanded]="menuOpen"
            [class.open]="menuOpen"
            (click)="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div class="mobile-menu" [class.open]="menuOpen">
        <div class="mobile-panel">
          <div class="mobile-panel-head">
            <span>Dr. Ruth Njoroge</span>
            <p>Plastic, reconstructive and aesthetic care in Mombasa.</p>
          </div>

          <div class="mobile-links">
            <button type="button" (click)="navigate('/home')">
              <span>01</span>
              Home
            </button>
            <button type="button" (click)="navigate('/services')">
              <span>02</span>
              Services
            </button>
            <button type="button" (click)="navigate('/about')">
              <span>03</span>
              About
            </button>
            <button type="button" (click)="navigate('/contact')">
              <span>04</span>
              Contact
            </button>
            <button type="button" (click)="navigate('/admin/dashboard')">
              <span>05</span>
              Admin
            </button>
          </div>

          <button class="mobile-book" type="button" (click)="navigate('/book-now')">Book Consultation</button>

          <div class="mobile-panel-note">
            Private consultation first. Clear next steps before any decision.
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .navbar {
      position: sticky;
      top: 0;
      z-index: 200;
      width: 100%;
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(75, 23, 50, 0.08);
      box-shadow: 0 10px 34px rgba(62, 36, 48, 0.04);
    }
    .nav-shell {
      height: 70px;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 24px;
      padding: 0 48px;
    }
    .nav-left,
    .nav-right {
      display: flex;
      align-items: center;
      gap: 24px;
      min-width: 0;
    }
    .nav-right {
      justify-content: flex-end;
      gap: 12px;
    }
    button {
      border: 0;
      background: transparent;
      color: rgba(75, 23, 50, 0.72);
      cursor: pointer;
      font-size: 0.78rem;
      letter-spacing: 0.06em;
      transition: color 0.25s, background 0.25s, transform 0.25s;
    }
    button:hover {
      color: var(--plum);
    }
    .brand {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(1.05rem, 2.4vw, 1.34rem);
      letter-spacing: 0;
      color: var(--plum);
      text-align: center;
      white-space: nowrap;
      text-transform: uppercase;
    }
    .brand span {
      color: var(--magenta-l);
    }
    .book-link,
    .mobile-book {
      background: var(--plum);
      color: #fff;
      padding: 9px 22px;
      border-radius: 4px;
    }
    .book-link:hover,
    .mobile-book:hover {
      background: var(--magenta);
      color: #fff;
      transform: translateY(-1px);
    }
    .admin-link {
      color: rgba(75, 23, 50, 0.48);
    }
    .hamburger {
      display: none;
      width: 34px;
      height: 34px;
      padding: 4px;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
    }
    .hamburger span {
      display: block;
      width: 22px;
      height: 1.5px;
      background: var(--ink);
      background: var(--plum);
      transition: transform 0.3s, opacity 0.3s;
    }
    .hamburger.open span:nth-child(1) {
      transform: rotate(45deg) translate(4.5px, 4.5px);
    }
    .hamburger.open span:nth-child(2) {
      opacity: 0;
    }
    .hamburger.open span:nth-child(3) {
      transform: rotate(-45deg) translate(4.5px, -4.5px);
    }
    .mobile-menu {
      display: none;
      position: fixed;
      inset: 70px 0 auto;
      min-height: calc(100svh - 70px);
      background:
        linear-gradient(135deg, rgba(139, 15, 85, 0.08), transparent 36rem),
        rgba(255, 255, 255, 0.98);
      z-index: 190;
      padding: 22px 20px 28px;
      border-bottom: 1px solid rgba(226, 177, 194, 0.18);
      overflow-y: auto;
    }
    .mobile-panel {
      width: min(100%, 460px);
      margin: 0 auto;
      min-height: calc(100svh - 120px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;
    }
    .mobile-panel-head {
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(75, 23, 50, 0.1);
    }
    .mobile-panel-head span {
      font-family: 'Cormorant Garamond', serif;
      display: block;
      font-size: clamp(2rem, 12vw, 3.1rem);
      line-height: 0.95;
      color: var(--plum);
      letter-spacing: 0;
    }
    .mobile-panel-head p {
      margin-top: 10px;
      color: var(--slate-m);
      font-size: 0.82rem;
      line-height: 1.7;
    }
    .mobile-links {
      display: flex;
      flex-direction: column;
      border-top: 1px solid rgba(75, 23, 50, 0.08);
    }
    .mobile-links button {
      min-height: 58px;
      display: flex;
      align-items: center;
      gap: 16px;
      border-bottom: 1px solid rgba(75, 23, 50, 0.08);
      color: var(--plum);
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(1.55rem, 7vw, 2.05rem);
      letter-spacing: 0;
      text-align: left;
    }
    .mobile-links button span {
      width: 28px;
      font-family: 'Inter', sans-serif;
      font-size: 0.62rem;
      letter-spacing: 0.16em;
      color: var(--magenta);
    }
    .mobile-menu .mobile-book {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      min-height: 48px;
      width: 100%;
      padding: 14px 24px;
      margin-top: 2px;
    }
    .mobile-panel-note {
      color: var(--slate-m);
      font-size: 0.74rem;
      line-height: 1.65;
      text-align: center;
      padding: 0 12px;
    }
    @media (max-width: 880px) {
      .nav-shell {
        grid-template-columns: 1fr auto;
        padding: 0 20px;
      }
      .nav-left,
      .admin-link,
      .book-link {
        display: none;
      }
      .brand {
        justify-self: start;
      }
      .hamburger {
        display: inline-flex;
      }
      .mobile-menu.open {
        display: flex;
      }
    }
    @media (max-width: 380px) {
      .nav-shell {
        padding: 0 14px;
      }
      .brand {
        font-size: 0.9rem;
      }
      .hamburger {
        width: 32px;
      }
      .mobile-menu {
        padding-inline: 16px;
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
