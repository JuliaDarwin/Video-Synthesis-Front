import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

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

  // aqui faltaria afegir tots els projectes, amb els seus url que agafarem del back
  workItems: any[] = [
    {
      title: 'Living Lakes',
      description:
        'Climate and sailing storytelling for one of the most recognizable teams in offshore racing.',
      client: 'whoever',
      tags: ['Digital Communications', 'Environmental storytelling', 'Social media content'],
      tasks: [
        'Write news articles and stories for Living Lakes and the IKI project',
        'Create and adapt newsletters for email and LinkedIn',
        'Produce videos for the IKI project',
        'Coordinate World Day communication campaigns',
        'Manage communication with project partners and shared content',
        'Maintain the project website',
        'Track communication performance and analytics',
      ],
      work: [
        {
          image: 'malizia.webp',
          description: 'Volvo Ocean Race: a year of progression for Living Lakes',
        },
        {
          image: 'malizia.webp',
          description: 'Volvo Ocean Race: a year of progression for Living Lakes',
        },
        {
          image: 'malizia.webp',
          description: 'Volvo Ocean Race: a year of progression for Living Lakes',
        },
      ],
      videoUrl: 'https://www.youtube.com/embed/PbgKEjNBHqM',
      picture: 'malizia.webp',
      slug: 'living-lakes',
      isShowCase: true,
    },
    {
      title: 'Team Malizia',
      description:
        'Helping transform offshore sailing, climate science and team stories into compelling video content for international audiences.',
      client: 'whoever',
      tags: ['Sailing storytelling', 'Climate Communication', 'Video Editing'],
      tasks: [
        "Create motion graphics for the team's visual identity during The Ocean Race Europe",
        'Develop the story structure for Malizians Season 2 (9 episodes)',
        'Support video editing for documentaries and team content',
      ],
      work: [
        {
          image: 'malizia.webp',
          description: 'Volvo Ocean Race: a year of progression for Living Lakes',
        },
        {
          image: 'malizia.webp',
          description: 'Volvo Ocean Race: a year of progression for Living Lakes',
        },
        {
          image: 'malizia.webp',
          description: 'Volvo Ocean Race: a year of progression for Living Lakes',
        },
      ],
      videoUrl: 'https://www.youtube.com/embed/PbgKEjNBHqM',
      picture: 'malizia.webp',
      slug: 'team-malizia',
      isShowCase: true,
    },
    {
      title: 'Med Star Alliance',
      description:
        'Creating clear, social-first visual content to support Mediterranean marine protection and campaign communication.',
      client: 'whoever',
      tags: ['Marine Conservation', 'Campaign Visuals', 'Social media content'],
      tasks: [
        'Cover major international events',
        'Create and manage social media content',
        'Track channel performance and analytics',
        'Plan and manage paid advertising campaigns',
        'Coordinate communication with member organizations',
        'Produce the alliance newsletter',
      ],
      work: [
        {
          image: 'malizia.webp',
          description: 'Volvo Ocean Race: a year of progression for Living Lakes',
        },
        {
          image: 'malizia.webp',
          description: 'Volvo Ocean Race: a year of progression for Living Lakes',
        },
        {
          image: 'malizia.webp',
          description: 'Volvo Ocean Race: a year of progression for Living Lakes',
        },
      ],
      videoUrl: 'https://www.youtube.com/embed/PbgKEjNBHqM',
      picture: 'malizia.webp',
      slug: 'med-star-alliance',
      isShowCase: true,
    },
    {
      title: 'Prova',
      description:
        'Creating clear, social-first visual content to support Mediterranean marine protection and campaign communication.',
      client: 'whoever',
      tags: ['Marine Conservation', 'Campaign Visuals', 'Social media content'],
      videoUrl: 'https://www.youtube.com/embed/PbgKEjNBHqM',
      picture: 'malizia.webp',
      slug: 'prova',
      isShowCase: false,
    },
    {
      title: 'Prova',
      description:
        'Creating clear, social-first visual content to support Mediterranean marine protection and campaign communication.',
      client: 'whoever',
      tags: ['Marine Conservation', 'Campaign Visuals', 'Social media content'],
      videoUrl: 'https://www.youtube.com/embed/PbgKEjNBHqM',
      picture: 'malizia.webp',
      slug: 'prova',
      isShowCase: false,
    },
    {
      title: 'Prova',
      description:
        'Creating clear, social-first visual content to support Mediterranean marine protection and campaign communication.',
      client: 'whoever',
      tags: ['Marine Conservation', 'Campaign Visuals', 'Social media content'],
      videoUrl: 'https://www.youtube.com/embed/PbgKEjNBHqM',
      picture: 'malizia.webp',
      slug: 'prova',
      isShowCase: false,
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.workItems.forEach((item) => {
      item.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(item.videoUrl);
    });
  }

  public get filteredWorkItems(): any[] {
    if (this.showOnlyFeatured) {
      return this.workItems.filter((item) => item.isShowCase === true);
    } else {
      return this.workItems.filter((item) => item.isShowCase === false);
    }
  }
}
