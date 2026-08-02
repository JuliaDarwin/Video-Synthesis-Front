import { Component } from '@angular/core';
import { CtaSection } from '../../components/cta-section/cta-section';
import { TeamAbout } from '../../components/team-about/team-about';

@Component({
  selector: 'app-team',
  imports: [CtaSection, TeamAbout],
  templateUrl: './team.html',
  styleUrl: './team.css',
  standalone: true
})
export class Team { }
