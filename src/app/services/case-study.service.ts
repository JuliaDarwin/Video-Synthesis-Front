import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environments";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CaseStudy } from "../models/case-study.model";

@Injectable({
    providedIn: 'root',
})

export class CaseStudyService {
    private apiUrl = environment.apiUrl + '/case-studies';

    //Right now in local development, your Spring Boot backend runs on your laptop at: http://localhost:8080/api

    //When you deploy your project live to production at videosynthesis.es, your backend will run on a live server URL like: https://api.videosynthesis.es/api

    //If you hardcode 'http://localhost:8080/api' inside your Angular services:

    // You CAN call it /api/case_studies (this is called a relative URL), but in local development:

    // Angular runs on Port 4200 (http://localhost:4200).
    // Spring Boot runs on Port 8080 (http://localhost:8080).
    // If Angular makes a relative request to /api/case_studies, the browser sends it to http://localhost:4200/api/case_studies (Port 4200), which doesn't exist!
    // Using environment.apiUrl + '/case_studies' guarantees the request goes to Port 8080 where Spring Boot is listening.
    constructor(private http: HttpClient) { }

    private getAuthHeaders() {
        const token = localStorage.getItem('auth_token');
        return {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${token}`
            })
        };
    }

    getCaseStudies(): Observable<CaseStudy[]> {
        return this.http.get<CaseStudy[]>(this.apiUrl);
    }

    getFeatured(): Observable<CaseStudy[]> {
        return this.http.get<CaseStudy[]>(`${this.apiUrl}/featured`);
    }

    getCaseStudyByTitle(title: string): Observable<CaseStudy> {
        return this.http.get<CaseStudy>(`${this.apiUrl}/${title}`)
    }

    getCaseStudyBySlug(slug: string): Observable<CaseStudy> {
        return this.http.get<CaseStudy>(`${this.apiUrl}/slug/${slug}`)
    }

    createCaseStudy(caseStudy: CaseStudy): Observable<CaseStudy> {
        return this.http.post<CaseStudy>(this.apiUrl, caseStudy, this.getAuthHeaders())
    }

    deleteCaseStudy(title: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${title}`, this.getAuthHeaders())
    }

    updateCaseStudy(title: string, caseStudy: CaseStudy): Observable<CaseStudy> {
        return this.http.put<CaseStudy>(`${this.apiUrl}/${title}`, caseStudy, this.getAuthHeaders())
    }
}