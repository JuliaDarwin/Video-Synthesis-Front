import { Component, importProvidersFrom } from '@angular/core';
import { CtaSection } from '../../components/cta-section/cta-section';
import { SelectedWork } from '../../components/selected-work/selected-work';
import { Hero } from '../../components/hero/hero';
@Component({
  selector: 'app-work',
  imports: [CtaSection, SelectedWork, Hero],
  templateUrl: './work.html',
  styleUrl: './work.css',
  standalone: true
})
export class Work { }
