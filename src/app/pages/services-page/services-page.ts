import { Component } from '@angular/core';
import { CtaSection } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-services-page',
  imports: [CtaSection],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
  standalone: true
})
export class ServicesPage {

  services: Array<any> = [
    {
      id: 1,
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
        'Platform-ready Exports'
      ],

      bestFor: [
        'Campaign Videos',
        'Expedition Films',
        'Sailing Races',
        'Short Documentaries',
        'Research Explainers',
        'Social Media Reels'
      ],

      image: 'malizia.webp'
    },

    {
      id: 2,
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
        'Editorial Guidance'
      ],

      bestFor: [
        'Research Projects',
        'Scientific Reports',
        'Conservation Campaigns',
        'Educational Content',
        'Policy Communication',
        'Ocean Science'
      ],

      image: 'malizia.webp'
    },

    {
      id: 3,
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
        'Platform Adaptation'
      ],

      bestFor: [
        'NGOs',
        'Foundations',
        'Research Institutes',
        'International Networks',
        'Long-term Campaigns',
        'Conservation Projects'
      ],

      image: 'malizia.webp'
    }
  ];
}
