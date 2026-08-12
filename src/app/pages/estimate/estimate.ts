import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Hero } from '../../components/hero/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimate',
  imports: [Hero, FormsModule, CurrencyPipe],
  templateUrl: './estimate.html',
  styleUrl: './estimate.css',
  standalone: true
})
export class Estimate {

  constructor(private router: Router) { }
  value: number = 1; //inicialitzacio de la variable value pel num de dies, mesos etc

  selectedService: any | null = {
    name: 'Video Production',
    needs: [
      {
        name: 'Divulgative / institutional video (2-4 min)',
        price: 1800
      }
    ],
    selectedNeed: {
      name: 'Divulgative / institutional video (2-4 min)',
      price: 1800
    },
    amount: 'projects',
    extras: [
      {
        name: 'Filming day',
        price: 700
      },
      {
        name: 'Technical script',
        price: 250
      },
      {
        name: 'Additional interview',
        price: 150
      }
    ]
  };

  selectedExtras = new Set<any>();

  selectService(service: any) {
    this.selectedService = { ...service, selectedNeed: service.needs[0] }; // selectedNeed: service.needs[0] makes the 1st need be selected as default
    this.selectedExtras.clear(); // Clear extras on service change
  }

  selectNeed(need: any) {
    this.selectedService.selectedNeed = need;
  }

  toggleExtra(extra: any, event: any) {
    if (event.target.checked) {
      this.selectedExtras.add(extra);
    } else {
      this.selectedExtras.delete(extra);
    }
  }

  get calculatedTotal(): number {
    if (!this.selectedService?.selectedNeed) return 0;

    // 1. Calculate need price * amount (slider value)
    let total = this.selectedService.selectedNeed.price * this.value;

    // 2. Add the price of each selected extra
    this.selectedExtras.forEach(extra => {
      total += extra.price;
    });

    return total;
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  services = [
    {
      name: 'Video Production',
      needs: [
        {
          name: 'Divulgative / institutional video (2–4 min)',
          price: 1800
        }
      ],
      amount: 'projects',
      extras: [
        {
          name: 'Filming day',
          price: 700
        },
        {
          name: 'Technical script',
          price: 250
        },
        {
          name: 'Additional interview',
          price: 150
        }
      ]
    },

    {
      name: 'Video Editing & Post-Production',
      needs: [
        {
          name: 'Short piece (up to 3 min)',
          price: 600
        },
        {
          name: 'Long piece (10–20 min)',
          price: 1200
        }
      ],
      amount: 'pieces',
      extras: [
        {
          name: 'Color grading',
          price: 200
        },
        {
          name: 'Titles & Basic Motion Graphics',
          price: 250
        },
        {
          name: 'Multilingual subtitles',
          price: 100
        }
      ]
    },

    {
      name: 'Motion Graphics & Data Visualization',
      needs: [
        {
          name: 'Motion piece (30–60s)',
          price: 800
        },
        {
          name: 'Infographics',
          price: 350
        },
        {
          name: 'Animated Brand Identity Kit (intros, templates, titles)',
          price: 900
        }
      ],
      amount: 'kits',
      extras: [
        {
          name: 'Multilingual versions',
          price: 150
        },
        {
          name: 'Additional animated data graphic',
          price: 250
        }
      ]
    },

    {
      name: 'Documentary',
      needs: [
        {
          name: 'Short documentary (3-5 min)',
          price: 2500
        },
        {
          name: 'Documentary (10–25 min)',
          price: 4500
        }
      ],
      amount: 'documentaries',
      extras: [
        {
          name: 'Filming day on location',
          price: 700
        },
        {
          name: 'Investigation and script',
          price: 500
        },
        {
          name: 'Multilingual subtitles',
          price: 150
        }
      ]
    },

    {
      name: 'Social Media Content',
      needs: [
        {
          name: 'Editions / shorts for social media',
          price: 150
        },
        {
          name: 'Infographics for social media',
          price: 120
        },
        {
          name: 'Monthly pack (8–12 pieces)',
          price: 900
        }
      ],
      amount: 'pieces',
      extras: [
        {
          name: 'Multilingual subtitles',
          price: 100
        },
        {
          name: 'Custom branded templates',
          price: 300
        }
      ]
    },

    {
      name: 'Ongoing Digital Communication',
      needs: [
        {
          name: 'Monthly channel management',
          price: 900
        },
        {
          name: 'Newsletter',
          price: 150
        }
      ],
      amount: 'months',
      extras: [
        {
          name: 'Content Strategy & Editorial Calendar (Initial Setup)',
          price: 400
        },
        {
          name: 'Paid Advertising Management (Monthly)',
          price: 350
        },
        {
          name: 'Analytics report',
          price: 200
        }
      ]
    },

    {
      name: 'Filming in Barcelona',
      needs: [
        {
          name: 'Full filming day with own equipment',
          price: 700
        },
        {
          name: 'Half-day filming',
          price: 450
        }
      ],
      amount: 'days',
      extras: [
        {
          name: 'Second camera + operator',
          price: 400
        },
        {
          name: 'Backup and material delivery',
          price: 100
        }
      ]
    }
  ];


}
