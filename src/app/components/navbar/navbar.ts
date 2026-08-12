import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMobileOpen = false;

  constructor(private router: Router) { }

  home() {
    this.router.navigate(['/']);
  }

  work() {
    this.router.navigate(['/work']);
  }

  services() {
    this.router.navigate(['/services']);
  }

  team() {
    this.router.navigate(['/team']);
  }

  contact() {
    this.router.navigate(['/contact']);
  }

  estimate() {
    this.router.navigate(['/estimate']);
  }

  toggleMobileMenu() {
    this.isMobileOpen = !this.isMobileOpen;
  }

  toBookCall() {
    this.isMobileOpen = false;
    this.router.navigate(['/book-a-call']);
  }
}
