import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-book-call',
  imports: [],
  templateUrl: './book-call.html',
  styleUrl: './book-call.css',
  standalone: true,
})
export class BookCall implements AfterViewInit {
  ngAfterViewInit() {
    const windowAny = window as any;
    if (windowAny.Calendly) {
      this.initializeCalendly();
    } else {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => this.initializeCalendly();
      document.body.appendChild(script);
    }
  }

  private initializeCalendly() {
    const windowAny = window as any;
    if (windowAny.Calendly) {
      const element = document.querySelector('.calendly-inline-widget');
      if (element) {
        const url = element.getAttribute('data-url');
        if (url) {
          element.innerHTML = ''; // Prevent duplicate widgets
          windowAny.Calendly.initInlineWidget({
            url: url,
            parentElement: element,
          });
        }
      }
    }
  }
}
