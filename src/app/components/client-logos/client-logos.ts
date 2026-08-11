import { Component } from '@angular/core';

@Component({
  selector: 'app-client-logos',
  imports: [],
  templateUrl: './client-logos.html',
  styleUrl: './client-logos.css',
})
export class ClientLogos {
  logos: any[] = [
    {
      src: 'logos/ocean-race.png',
      alt: 'The Ocean Race',
      name: 'The Ocean Race',
    },
    {
      src: 'logos/team-malizia.png',
      alt: 'Team Malizia',
      name: 'Team Malizia',
    },
    {
      src: 'logos/oceana.png',
      alt: 'Oceana in Europe',
      name: 'Oceana in Europe',
    },
    {
      src: 'logos/mongabay.png',
      alt: 'Mongabay',
      name: 'Mongabay',
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
      src: 'logos/med-sea.svg',
      alt: 'Med Sea Alliance',
      name: 'Med Sea Alliance',
    },
    {
      src: 'logos/marilles.jpeg',
      alt: 'Marilles Foundation',
      name: 'Marilles Foundation',
    },
  ];
}
