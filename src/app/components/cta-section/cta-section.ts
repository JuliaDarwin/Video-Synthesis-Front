import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  imports: [],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
  standalone: true,
})
export class CtaSection {
  @Input() title: String = 'Have an ocean story worth telling?';
  @Input() text: string =
    "Let's turn your science, campaign or sailing story into content people understand, remember and share.";
  @Input() btn1: String = 'Book a Free Call';
  @Input() btn2: String = 'Estimate your project';

  constructor(private router: Router) { }

  onBtnClick(btnText: String) {
    if (btnText === "Book a Call" || btnText === "Book a Free Call") {
      this.router.navigate(['/book-a-call']);
    } else if (btnText === "Estimate your project") {
      this.router.navigate(['/estimate']);
    } else if (btnText === "Start a Project") {
      this.router.navigate(['/contact']);
    }
  }
}
