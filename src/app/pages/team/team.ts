import { Component } from '@angular/core';
import { CtaSection } from '../../components/cta-section/cta-section';
import { TeamAbout } from '../../components/team-about/team-about';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-team',
  imports: [CtaSection, TeamAbout, Hero],
  templateUrl: './team.html',
  styleUrl: './team.css',
  standalone: true,
})
export class Team { }
