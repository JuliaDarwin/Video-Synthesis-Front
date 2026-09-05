import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CaseStudy } from '../../models/case-study.model';
import { CaseStudyService } from '../../services/case-study.service';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './case-study.html',
  styleUrl: './case-study.css',
})
export class CaseStudyPage implements OnInit {
  projectItem = signal<CaseStudy | null>(null);
  selectedVideoUrl = signal<string | null>(null);
  animatedMetrics = signal<string[]>([]);

  constructor(private caseStudyService: CaseStudyService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadCaseStudy();
  }

  loadCaseStudy(): void {
    const slugParam = this.route.snapshot.paramMap.get('projectName');
    if (slugParam) {
      this.caseStudyService.getCaseStudyBySlug(slugParam).subscribe({
        next: (data) => {
          this.projectItem.set(data);
          if (data.metrics) {
            // Initialize with '0's
            this.animatedMetrics.set(data.metrics.map(() => '0'));
            data.metrics.forEach((metric, index) => {
              this.animateCountUp(metric.number, 3000, (currentValue) => {
                this.animatedMetrics.update((list) => {
                  const updated = [...list];
                  updated[index] = currentValue;
                  return updated;
                });
              });
            });
          }
        },
        error: (err) => {
          console.error('Error fetching case study:', err);
        }
      });
    }
  }

  getSafeUrl(url: string | undefined | null): SafeResourceUrl {
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : '';
  }

  openVideoModal(url: string | undefined): void {
    if (!url) return;

    // Optional: Make the modal video autoplay when clicked
    let autoplayUrl = url;
    if (autoplayUrl.includes('?')) {
      if (!autoplayUrl.includes('autoplay=')) autoplayUrl += '&autoplay=1';
    } else {
      autoplayUrl += '?autoplay=1';
    }

    this.selectedVideoUrl.set(autoplayUrl);
  }

  closeVideoModal(): void {
    this.selectedVideoUrl.set(null); // Clears the signal, which removes the modal from the DOM
  }



  // openVideoModal(url: string): void {
  //   this.selectedVideoUrl.set(url);
  // }

  // closeVideoModal(): void {
  //   this.selectedVideoUrl.set(null);
  // }

  // Helper function to animate counting up
  animateCountUp(targetStr: string, duration = 1500, onUpdate: (val: string) => void): void {
    // Extract digits (e.g., "293.800" -> 293800)
    const targetNum = parseInt(targetStr.replace(/\D/g, ''), 10);
    if (isNaN(targetNum)) {
      onUpdate(targetStr);
      return;
    }

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * targetNum);

      // Formats with dots/commas (e.g., 293800 -> "293.800")
      onUpdate(current.toLocaleString());

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        onUpdate(targetStr); // Ensure exact final value is set
      }
    };

    requestAnimationFrame(step);
  }

  // workItems: any[] = [
  //   {
  //     title: 'Living Lakes',
  //     description:
  //       'Climate and sailing storytelling for one of the most recognizable teams in offshore racing.',
  //     period: '2023-ongoing',
  //     services: 'Digital Communications · Environmental storytelling · Social media content',
  //     externalUrl: 'https://www.team-malizia.com/',
  //     thumbnail: 'malizia.webp',
  //     slug: 'living-lakes',
  //     isShowCase: true,
  //     subhead:
  //       'Digital communications and visual storytelling for international lake and wetland conservation.',
  //     context:
  //       'Living Lakes brings together organizations working to protect and restore lakes, wetlands and freshwater ecosystems around the world. Communicating this work requires clarity, consistency and the ability to adapt complex environmental messages for international audiences.',
  //     challenge:
  //       'The challenge is to connect diverse projects, countries, partners and conservation goals under a coherent communication strategy. Content must be accurate, accessible and useful across websites, social media, newsletters, webinars and campaign materials.',
  //     created:
  //       'We supported digital communications through video content, social media assets, web updates, campaign materials and visual storytelling designed to make freshwater conservation more visible and understandable.',
  //     creativeApproach:
  //       'Our approach combines environmental communication, editorial planning and visual clarity. We focus on making complex conservation work easier to navigate, easier to share and easier to connect with.',
  //     deliverables: [
  //       'Social media content',
  //       'Video editing',
  //       'Web content support',
  //       'Newsletter visuals',
  //       'Webinar promotion assets',
  //       'Infographics',
  //       'Digital communications planning',
  //       'Campaign adaptation',
  //     ],
  //     metrics: [
  //       { number: '293.800', text: 'Visualizations of the series edited' },
  //       { number: '27', text: 'videos delivered' },
  //       { number: '100', text: 'short pieces produced by the rest of the team' }
  //     ],
  //     campaign: [
  //       { title: "Dia mundial dels humedales", image: 'malizia.webp' },
  //       { title: "Dia mundial dels humedales", image: 'malizia.webp' },
  //       { title: "Dia mundial dels humedales", image: 'malizia.webp' }
  //     ],
  //     results: [
  //       'Stronger digital presence for international conservation work',
  //       'More consistent communication across channels',
  //       'Clearer storytelling around lakes, wetlands and biodiversity',
  //       'Increased visibility for project activities, resources and events',
  //     ],
  //     relatedServices: [
  //       'Digital Communications Strategy',
  //       'Video Editing & Post-Production',
  //       'Infographics & Visual Design',
  //       'Science Storytelling & Scriptwriting',
  //     ],
  //   },

  //   {
  //     title: 'Team Malizia',
  //     description:
  //       'Helping transform offshore sailing, climate science and team stories into compelling video content for international audiences.',
  //     period: '2023-ongoing',
  //     services: 'Sailing storytelling · Climate Communication · Video Editing',
  //     externalUrl: 'https://www.team-malizia.com/',
  //     thumbnail: 'malizia.webp',
  //     slug: 'team-malizia',
  //     isShowCase: true,
  //     subhead:
  //       'Climate storytelling, sailing content and high-performance video editing for a professional offshore racing team.',
  //     context:
  //       'Team Malizia sits at the intersection of professional sailing, climate communication and ocean storytelling. Their content needs to capture the intensity of offshore racing while keeping a strong connection to science, sustainability and team identity.',
  //     challenge:
  //       'Team Malizia compite con IMOCA 60 alrededor del planeta mientras desarrolla un programa a bordo de ciencia oceánica y educación climática. Cientos de horas de material a bordo por campaña, una audiencia global en varios idiomas e historias que se mueven entre el Océano Austral y las aulas. El contenido del equipo debe servir a la vez a los aficionados a la regata, a los patrocinadores y a su misión climática — sin bajar el listón en ninguno de los tres.',
  //     created:
  //       'Creamos la identidad visual en motion graphics del equipo para The Ocean Race Europe — el sistema gráfico sobre el que se construye su contenido de regata. Dimos forma a la narrativa de Malizians Season 2 a lo largo de sus nueve episodios: estructurar cientos de horas de material a bordo y de las escalas en una serie documental con arranque, personajes y tensión.Y damos soporte de edición en las piezas insignia del equipo, como el documental UNCONVENTIONAL, junto al subtitulado multilingüe en inglés, alemán y francés.',
  //     creativeApproach:
  //       'Our approach focuses on balancing human emotion, sailing performance and climate meaning. We look for the story behind the footage: what is at stake, what the audience needs to understand and what feeling should remain after watching.',
  //     deliverables: [
  //       'Video editing',
  //       'Story structure',
  //       'Social-first content',
  //       'Motion graphics',
  //       'Subtitles',
  //       'Platform-ready exports',
  //       'Visual storytelling support',
  //     ],
  //     metrics: [
  //       { number: '293.800', text: 'Visualizations of the series edited' },
  //       { number: '27', text: 'videos delivered' },
  //       { number: '100', text: 'short pieces produced by the rest of the team' }
  //     ],
  //     campaign: [
  //       { title: "Dia mundial dels humedales", image: 'malizia.webp' },
  //       { title: "Dia mundial dels humedales", image: 'malizia.webp' },
  //       { title: "Dia mundial dels humedales", image: 'malizia.webp' }
  //     ],
  //     results: [
  //       'Stronger storytelling around sailing, climate and team identity',
  //       'Content adapted for international digital audiences',
  //       'Clearer connection between offshore racing and ocean impact',
  //     ],
  //     relatedServices: [
  //       'Video Editing & Post-Production',
  //       'Motion Graphics & Animation',
  //       'Science Storytelling & Scriptwriting',
  //       'Digital Communications Strategy',
  //     ],
  //   },

  //   {
  //     title: 'Med Star Alliance',
  //     description:
  //       'Creating clear, social-first visual content to support Mediterranean marine protection and campaign communication.',
  //     client: 'whoever',
  //     tags: ['Marine Conservation', 'Campaign Visuals', 'Social media content'],
  //     externalUrl: 'https://www.youtube.com/embed/PbgKEjNBHqM',
  //     thumbnail: 'malizia.webp',
  //     slug: 'med-star-alliance',
  //     isShowCase: true,
  //     subhead:
  //       'Campaign visuals and social-first content supporting marine protection in the Mediterranean.',
  //     context:
  //       'The Mediterranean is a global hotspot for marine biodiversity and a region under intense pressure from overfishing, habitat degradation and competing ocean uses. Communicating protection measures requires strong visuals, clear messages and content that can work across advocacy, policy and public-facing channels.',
  //     challenge:
  //       'The challenge is to turn technical, policy-related and science-based information into concise, engaging content for social media and campaign communication, while keeping the message accurate and aligned with partner organizations.',
  //     created:
  //       'We supported the creation of social-first content, campaign visuals and communication assets designed to make Mediterranean marine protection easier to understand and share.',
  //     creativeApproach:
  //       'Our approach focuses on clarity, urgency and visual simplicity. We translate dense information into accessible messages that help audiences quickly understand what is at stake and why protection matters.',
  //     deliverables: [
  //       'Social media visuals',
  //       'Campaign graphics',
  //       'Short-form video assets',
  //       'Infographics',
  //       'Copy support',
  //       'Platform adaptations',
  //       'Visual consistency across campaign materials',
  //     ],
  //     metrics: [
  //       { number: '293.800', text: 'Visualizations of the series edited' },
  //       { number: '27', text: 'videos delivered' },
  //       { number: '100', text: 'short pieces produced by the rest of the team' }
  //     ],
  //     campaign: [
  //       { title: "Dia mundial dels humedales", image: 'malizia.webp' },
  //       { title: "Dia mundial dels humedales", image: 'malizia.webp' },
  //     ],
  //     results: [
  //       'Clearer communication around Mediterranean marine protection',
  //       'More consistent campaign visuals',
  //       'Social-ready assets for advocacy and awareness',
  //       'Stronger translation of policy and science into public-facing content',
  //     ],
  //     relatedServices: [
  //       'Infographics & Visual Design',
  //       'Digital Communications Strategy',
  //       'Science Storytelling & Scriptwriting',
  //       'Video Editing & Post-Production',
  //     ],
  //   },

  //   {
  //     title: 'Prova',
  //     description:
  //       'Creating clear, social-first visual content to support Mediterranean marine protection and campaign communication.',
  //     tags: ['Marine Conservation', 'Campaign Visuals', 'Social media content'],
  //     externalUrl: 'https://www.youtube.com/embed/PbgKEjNBHqM',
  //     thumbnail: 'malizia.webp',
  //     slug: 'prova',
  //     isShowCase: false,
  //     client: '',
  //     subhead: '',
  //     context: '',
  //     challenge: '',
  //     created: '',
  //     creativeApproach: '',
  //     deliverables: [],
  //     results: [],
  //     relatedServices: [],
  //   },
  // ];

}