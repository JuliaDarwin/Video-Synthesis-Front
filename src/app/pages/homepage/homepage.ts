import { Component } from '@angular/core';
import { SelectedWork } from '../../components/selected-work/selected-work';
import { Faqs } from '../../components/faqs/faqs';
import { Metrics } from '../../components/metrics/metrics';
import { ClientLogos } from '../../components/client-logos/client-logos';
import { ReviewsHomepage } from '../../components/reviews-homepage/reviews-homepage';
import { ServicesHomepage } from '../../components/services-homepage/services-homepage';
import { CtaSection } from '../../components/cta-section/cta-section';
import { TeamAbout } from '../../components/team-about/team-about';

@Component({
  selector: 'app-homepage',
  imports: [
    SelectedWork,
    TeamAbout,
    Faqs,
    Metrics,
    ClientLogos,
    ReviewsHomepage,
    ServicesHomepage,
    CtaSection,
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
  standalone: true,
})
export class Homepage {}
