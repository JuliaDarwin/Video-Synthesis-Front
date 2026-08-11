import { Component } from '@angular/core';
import { CtaSection } from '../../components/cta-section/cta-section';
import { SelectedWork } from '../../components/selected-work/selected-work';
@Component({
  selector: 'app-work',
  imports: [CtaSection, SelectedWork],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {}
