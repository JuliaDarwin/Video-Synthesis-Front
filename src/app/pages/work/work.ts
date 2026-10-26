import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
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
export class Work implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Our Work | Video Synthesis');
    this.metaService.updateTag({ name: 'description', content: 'Explore our portfolio of video production, science storytelling and digital communications projects for environmental organisations and sailing teams.' });
  }
}
