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
export class Team {
  logos: any[] = [
    {
      src: 'logos/ocean-race.png',
      alt: 'The Ocean Race',
      name: 'The Ocean Race',
    },
    {
      src: 'logos/malizia.png',
      alt: 'Team Malizia',
      name: 'Team Malizia',
    },
    {
      src: 'logos/racing.png',
      alt: '11th hour racing',
      name: '11th Hour Racing',
    },
    {
      src: 'logos/oceana.png',
      alt: 'Oceana in Europe',
      name: 'Oceana in Europe',
    },
    {
      src: 'logos/sailing-energy.png',
      alt: 'Sailing energy',
      name: 'Sailing energy',
    },
    {
      src: 'logos/mongabay.png',
      alt: 'Mongabay',
      name: 'Mongabay',
    },
    {
      src: 'logos/segittur.png',
      alt: 'Segittur',
      name: 'Segittur',
    },
    {
      src: 'logos/t-systems.png',
      alt: 'T-Systems',
      name: 'T-Systems',
    },
    {
      src: 'logos/ebvb.png',
      alt: 'EBVB',
      name: 'EBVB',
    },
    {
      src: 'logos/rockwool.png',
      alt: 'ROCKWOOL Denmark SailGP',
      name: 'ROCKWOOL Denmark',
    },
    {
      src: 'logos/global-nature.png',
      alt: 'Fundación Global Nature',
      name: 'Fundación Global Nature',
    },
    {
      src: 'logos/living-lakes.png',
      alt: 'Living Lakes',
      name: 'Living Lakes',
    },
    {
      src: 'logos/xaloc.png',
      alt: 'Xaloc',
      name: 'Xaloc',
    },
    {
      src: 'logos/med-sea-alliance.png',
      alt: 'Med Sea Alliance',
      name: 'Med Sea Alliance',
    },
    {
      src: 'logos/toolbox.png',
      alt: 'Toolbox',
      name: 'Toolbox',
    },
  ];
}
