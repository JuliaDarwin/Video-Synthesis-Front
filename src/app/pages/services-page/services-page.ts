import { Component } from '@angular/core';
import { CtaSection } from '../../components/cta-section/cta-section';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-page',
  imports: [CtaSection],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
  standalone: true,
})
export class ServicesPage {
  constructor(private router: Router) {}

  services: Array<any> = [
    {
      id: '01',
      category: 'VIDEO SERVICES',
      title: 'Video Editing & Post-Production',
      description:
        'We transform raw footage into polished, story-driven films for campaigns, expeditions, races, research projects and social media. From narrative structure to final delivery, every edit is crafted to communicate your message with clarity and impact.',

      includes: [
        'Video Editing',
        'Story Structure',
        'Motion Graphics',
        'Color Correction & Grading',
        'Audio Cleanup',
        'Subtitles',
        'Social Media Versions',
        'Platform-ready Exports',
      ],

      bestFor: [
        { name: 'Campaign Videos', icon: 'campaign' },
        { name: 'Expedition Films', icon: 'explore' },
        { name: 'Sailing Races', icon: 'sailing' },
        { name: 'Short Documentaries', icon: 'movie' },
        { name: 'Research Explainers', icon: 'science' },
        { name: 'Social Media Reels', icon: 'smartphone' },
      ],

      image: 'video-editing.jpg',
    },

    {
      id: '02',
      category: 'SCIENCE COMMUNICATION',
      title: 'Science Storytelling & Visual Communication',
      description:
        'We turn complex scientific information into engaging stories and visuals that are accessible without sacrificing accuracy. From scripts and infographics to animated explainers, we help audiences understand and connect with your work.',

      includes: [
        'Scriptwriting',
        'Science Translation',
        'Narrative Development',
        'Infographics',
        'Data Visualization',
        'Motion Graphics',
        'Presentation Visuals',
        'Editorial Guidance',
      ],

      bestFor: [
        { name: 'Research Projects', icon: 'science' },
        { name: 'Scientific Reports', icon: 'description' },
        { name: 'Conservation Campaigns', icon: 'eco' },
        { name: 'Educational Content', icon: 'school' },
        { name: 'Policy Communication', icon: 'policy' },
        { name: 'Ocean Science', icon: 'water' },
      ],

      image: 'video-editing.jpg',
    },

    {
      id: '03',
      category: 'COMMUNICATION STRATEGY',
      title: 'Digital Communications & Campaign Strategy',
      description:
        'Beyond creating content, we help organizations build communication strategies that maximise reach and long-term impact. We adapt content for different platforms and audiences while keeping every piece connected to a clear campaign objective.',

      includes: [
        'Content Strategy',
        'Campaign Planning',
        'Social Media Content',
        'Editorial Calendars',
        'Website Content',
        'Newsletter Assets',
        'Campaign Toolkits',
        'Platform Adaptation',
      ],

      bestFor: [
        { name: 'NGOs', icon: 'volunteer_activism' },
        { name: 'Foundations', icon: 'account_balance' },
        { name: 'Research Institutes', icon: 'biotech' },
        { name: 'International Networks', icon: 'public' },
        { name: 'Long-term Campaigns', icon: 'campaign' },
        { name: 'Conservation Projects', icon: 'eco' },
      ],

      image: 'video-editing.jpg',
    },
  ];

  toContact() {
    this.router.navigate(['/contact']);
  }
}
