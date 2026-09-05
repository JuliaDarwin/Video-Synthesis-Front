import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// This interface matches your backend's AuthResponseDTO
export interface AuthResponse {
    accessToken: string;
    tokenType: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:8080/api/auth/login';

    constructor(private http: HttpClient) { }

    // 1. Send the login request
    login(username: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(this.apiUrl, { username, password });
    }

    // 2. Save token helper
    saveToken(token: string): void {
        localStorage.setItem('auth_token', token);
    }

    // 3. Check if user is logged in
    isLoggedIn(): boolean {
        return !!localStorage.getItem('auth_token');
    }

    // 4. Clear token on logout
    logout(): void {
        localStorage.removeItem('auth_token');
    }
}
