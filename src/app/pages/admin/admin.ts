import { Component, OnInit, signal, computed } from '@angular/core';
import { CaseStudy } from '../../models/case-study.model';
import { CaseStudyService } from '../../services/case-study.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  imports: [RouterLink, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
  standalone: true
})
export class Admin implements OnInit {

  workItems = signal<CaseStudy[]>([]);
  searchWord = signal('');

  constructor(
    private caseStudyService: CaseStudyService,
    private authService: AuthService,
    private router: Router
  ) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  ngOnInit(): void {
    this.loadCases()
  }

  filteredCases = computed(() => {
    const search = this.searchWord().toLowerCase();
    const cases = this.workItems();

    if (!search) {
      return cases;
    }
    return cases.filter(c => c.title.toLowerCase().includes(search));
  })

  loadCases(): void {
    console.log('Fetching cases from service...');
    this.caseStudyService.getCaseStudies().subscribe({
      next: data => {
        console.log('Successfully fetched cases:', data);
        this.workItems.set(data);
      },
      error: err => {
        console.log('Error fetching case studsies', err);
      }
    });
  }

  deleteCase(slug: string, title?: string): void {
    if (confirm(`Are you sure you want to delete "${title || slug}"?`)) {
      this.caseStudyService.deleteCaseStudy(slug).subscribe({
        next: () => {
          console.log('Case deleted successfully');
          this.loadCases();
        },
        error: err => {
          console.log('Error deleting case', err);
        }
      });
    }
  }
}

