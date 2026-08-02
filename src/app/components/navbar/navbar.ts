import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isMobileOpen = false;

  constructor(
    private router: Router
  ) { }

  home() {
    this.router.navigate(["/"])
  }

  work() {
    this.router.navigate(["/work"])
  }

  services() {
    this.router.navigate(["/services"])
  }

  team() {
    this.router.navigate(["/team"])
  }

  reviews() {
    this.router.navigate(["/reviews"])
  }

  estimate() {
    this.router.navigate(["/estimate"])
  }

  toggleMobileMenu() {
    this.isMobileOpen = !this.isMobileOpen;
  }


}
