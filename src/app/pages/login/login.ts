import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit(e: Event) {
    e.preventDefault();
    
    // Grab the values using FormData (TypeScript loves this)
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    // Use our new AuthService!
    this.authService.login(username, password).subscribe({
      next: (response) => {
        // Save the token using the service
        this.authService.saveToken(response.accessToken);
        
        console.log("Logged in successfully!");
        
        // Redirect to wherever your protected page is
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        console.error("Login failed!", err);
        alert("Invalid username or password");
      }
    });
  }
}
