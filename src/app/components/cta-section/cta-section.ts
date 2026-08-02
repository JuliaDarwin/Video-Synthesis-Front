import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  imports: [],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
  standalone: true
})
export class CtaSection {

  @Input() title: String = 'Have an ocean story worth telling?';
  @Input() text: string = "Let's turn your science, campaign or sailing story into content people understand, remember and share."
  @Input() btn1: String = "Book a Free Call"
  @Input() btn2: String = "Estimate your project"
}
