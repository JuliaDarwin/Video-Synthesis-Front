import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  imports: [],
  templateUrl: './faqs.html',
  styleUrl: './faqs.css',
})
export class Faqs {
  openIndex: number | null = null;

  faqs = [
    {
      question: 'What kind of organizations do you work with?',
      answer:
        'We work with marine and environmental NGOs, research institutions, conservation campaigns, foundations, professional sailing teams and ocean-focused brands.',
    },
    {
      question: 'Do you only work on ocean-related projects?',
      answer:
        'Ocean, science and sustainability are our core focus. We occasionally take on related environmental, climate or impact-driven projects when the story fits our expertise.',
    },
    {
      question: 'Can you help if we only have raw footage?',
      answer:
        'Yes. We can shape raw footage into a structured story, including editing, subtitles, motion graphics, color, sound and platform-specific versions.',
    },
    {
      question: 'Can you help with scripts and storytelling?',
      answer:
        'Yes. Story structure, voiceover, narrative flow and science translation are core parts of our process.',
    },
    {
      question: 'Can I see a sample before hiring you?',
      answer:
        'Absolutely! I can provide a 10-15 second sample edit of your footage so you can see my editing style and quality before committing to the full project.',
    },
    {
      question: 'Do you create social media versions?',
      answer:
        'Yes. We can adapt one core video into vertical reels, short clips, carousels, teasers, subtitles and other social-first assets.',
    },
    {
      question: 'How many revisions are included?',
      answer:
        'Up to three rounds of review are included, with the first round focused on larger structural or message-level changes.',
    },
    {
      question: 'What tools do you use?',
      answer:
        'We work with Adobe Premiere Pro, After Effects, Illustrator, Photoshop, Audition and other professional tools, supported by licensed music, sound and graphic libraries.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'A typical short video takes around two weeks from kickoff to first delivery, depending on scope, feedback and available materials.',
    },
    {
      question: 'How do we start?',
      answer:
        'Book a free 15-minute call or use the project estimator. We’ll discuss your goals, audience, materials, timeline and the best format for your story.',
    },
  ];

  toggleAccordion(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
