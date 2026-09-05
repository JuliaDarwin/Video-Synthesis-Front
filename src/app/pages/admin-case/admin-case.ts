import { Component, OnInit, signal, Type } from '@angular/core';
import { CaseStudy } from '../../models/case-study.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CaseStudyService } from '../../services/case-study.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environments';

@Component({
  selector: 'app-admin-case',
  imports: [RouterLink, FormsModule],
  templateUrl: './admin-case.html',
  styleUrl: './admin-case.css',
})
export class AdminCase implements OnInit {
  caseItem = signal<Partial<CaseStudy>>({});
  caseSlug: string = '';
  isEditMode = signal<boolean>(false);

  constructor(
    private caseStudyService: CaseStudyService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('projectName');
    if (idParam) {
      this.caseSlug = idParam;
      this.isEditMode.set(true);
      this.loadCase(idParam);
    } else {
      this.isEditMode.set(false);
    }
  }

  loadCase(param: string): void {
    this.caseStudyService.getCaseStudyBySlug(param).subscribe({
      next: (data) => this.caseItem.set(data),
      error: (err) => console.log('Error loading case', err)
    })
  }

  saveCase(): void {
    const caseData = this.caseItem() as CaseStudy;
    if (!caseData.slug || !caseData.slug.trim()) {
      alert('Slug is required!');
      return;
    }
    if (this.isEditMode()) {
      this.caseStudyService.updateCaseStudy(this.caseSlug, caseData).subscribe({
        next: () => this.router.navigate(['/admin']),
        error: (err) => console.error('Error updating case:', err)
      })
    } else {
      this.caseStudyService.createCaseStudy(caseData).subscribe({
        next: () => this.router.navigate(['/admin']),
        error: (err) => console.error('Error updating case:', err)
      })
    }
  }

  // Adds a new blank input field to the array
  addItemArray(field: 'tags' | 'deliverables' | 'tasks'): void {
    if (!this.caseItem()[field]) {
      this.caseItem()[field] = [];
    }
    this.caseItem()[field]!.push('');
  }

  // Removes an item from the array by its index
  removeItemArray(field: 'tags' | 'deliverables' | 'tasks', index: number): void {
    this.caseItem()[field]?.splice(index, 1);
  }

  addMetric(): void {
    if (!this.caseItem().metrics) {
      this.caseItem().metrics = [];
    }
    // Push a blank object with the 2 fields
    this.caseItem().metrics!.push({ number: '', text: '' });
  }

  removeMetric(index: number): void {
    this.caseItem().metrics?.splice(index, 1);
  }

  addWork(): void {
    if (!this.caseItem().work) {
      this.caseItem().work = [];
    }
    // Push a blank object with the 2 fields
    this.caseItem().work!.push({ image: '', description: '' });
  }

  removeWork(index: number): void {
    this.caseItem().work?.splice(index, 1);
  }

  addCampaign(): void {
    if (!this.caseItem().campaign) {
      this.caseItem().campaign = [];
    }
    this.caseItem().campaign!.push({ title: '', image: '' });
  }

  removeCampaign(index: number): void {
    this.caseItem().campaign?.splice(index, 1);
  }

  onFileSelected(event: Event, target: string | { image: string }): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      const formData = new FormData();
      formData.append('file', file);

      const token = localStorage.getItem('auth_token');
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

      this.http.post<{ imageUrl: string }>(`${environment.apiUrl}/upload`, formData, { headers }).subscribe({
        next: (response) => {
          if (typeof target === 'string') {
            (this.caseItem() as any)[target] = response.imageUrl;
          } else {
            target.image = response.imageUrl;
          }
        },
        error: (err) => console.error('Upload failed:', err)
      });
    }
  }
}



