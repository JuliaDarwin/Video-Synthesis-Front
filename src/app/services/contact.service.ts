import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactForm {
  aboutYou?: {
    name?: string;
    organization?: string;
    role?: string;
    email?: string;
    website?: string;
    contactMethod?: string;
    projectTitle?: string;
    description?: string;
    goal?: string;
    audience?: string;
    message?: string;
    platforms?: {
      website?: boolean;
      instagram?: boolean;
      youtube?: boolean;
      linkedin?: boolean;
    };
  };
  requirements?: {
    deliverables?: {
      mainVideo?: boolean;
      socialMediaCutdowns?: boolean;
      verticalReels?: boolean;
      motionGraphics?: boolean;
      infographics?: boolean;
      subtitles?: boolean;
      translations?: boolean;
      campaignVisuals?: boolean;
      websiteAssets?: boolean;
      notSure?: boolean;
    };
    materials?: {
      rawFootage?: boolean;
      interviews?: boolean;
      photos?: boolean;
      script?: boolean;
      brandGuidelines?: boolean;
      previousContent?: boolean;
      references?: boolean;
      dataReports?: boolean;
    };
  };
  timeBudget?: {
    startDate?: string;
    deliverableDate?: string;
    deadlineFlexible?: string;
    budget?: string;
  };
  additionalDetails?: {
    additionalDetails?: string;
  };
}

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    // Update this to match your Spring Boot port and context path
    private apiUrl = 'http://localhost:8080/api/contact';

    constructor(private http: HttpClient) { }

    sendMessage(data: ContactForm): Observable<string> {
        // responseType: 'text' because Spring Boot returns a plain string, not JSON
        return this.http.post(this.apiUrl, data, { responseType: 'text' });
    }
}