import { Component, Input, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CaseStudy } from '../../models/case-study.model';
import { CaseStudyService } from '../../services/case-study.service';

@Component({
  selector: 'app-selected-work',
  imports: [RouterLink],
  templateUrl: './selected-work.html',
  styleUrl: './selected-work.css',
})
export class SelectedWork implements OnInit {
  @Input() showCategories: Boolean = true;
  @Input() showOnlyFeatured = false;
  @Input() isAnimated = true;
  @Input() forHomepage = false;
  workItems = signal<CaseStudy[]>([]);

  constructor(private caseStudyService: CaseStudyService) { }

  ngOnInit(): void {
    this.loadWorkItems();
  }

  loadWorkItems(): void {
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

  public get filteredWorkItems(): CaseStudy[] {
    if (this.showOnlyFeatured) {
      return this.workItems().filter((item) => item.showCase === true);
    } else {
      return this.workItems().filter((item) => item.showCase === false);
    }
  }
}
