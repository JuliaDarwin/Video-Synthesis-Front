import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-about',
  imports: [],
  templateUrl: './team-about.html',
  styleUrl: './team-about.css',
  standalone: true,
})
export class TeamAbout {
  @Input() showShortBio: boolean = false;
}
