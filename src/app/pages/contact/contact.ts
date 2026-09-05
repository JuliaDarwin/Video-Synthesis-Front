import { Component, inject } from '@angular/core';
import { CtaSection } from '../../components/cta-section/cta-section';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hero } from '../../components/hero/hero';
import { ChangeDetectorRef } from '@angular/core';
import { ContactService, ContactForm } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [CtaSection, ReactiveFormsModule, Hero],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true
})
export class Contact {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  private cdr = inject(ChangeDetectorRef);

  currentStep: number = 1;
  isSubmitted: boolean = false;

  stepTitles = ['About you and Your Project', 'Requirements', 'Time and Budget', 'Additional Details'];

  goToStep(step: number) {
    this.currentStep = step;
  }

  nextStep() {
    if (this.currentStep === 1) {
      const aboutYou = this.contactForm.controls.aboutYou;
      if (!aboutYou?.valid) {
        aboutYou?.markAllAsTouched();
        return; // Block navigation
      }
    } else if (this.currentStep === 3) {
      const timeBudget = this.contactForm.controls.timeBudget;
      if (!timeBudget?.valid) {
        timeBudget?.markAllAsTouched();
        return; // Block navigation
      }
    }

    this.currentStep++;
  }

  previousStep() {
    this.currentStep--;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.contactForm.valid) {
      this.contactService.sendMessage(this.contactForm.value as ContactForm).subscribe({
        next: (response) => {
          console.log('Success!', response);
          this.isSubmitted = true;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error sending message', err);
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  contactForm = this.fb.group({
    aboutYou: this.fb.group({
      name: ['', Validators.required],
      organization: ['', Validators.required],
      role: [''],
      email: ['', [Validators.required, Validators.email]],
      website: [''],
      contactMethod: ['', Validators.required],
      projectTitle: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
      goal: ['', Validators.maxLength(1000)],
      audience: ['', Validators.maxLength(1000)],
      message: ['', Validators.maxLength(1000)],
      platforms: this.fb.group({
        website: [false],
        instagram: [false],
        youtube: [false],
        linkedin: [false]
      })
    }),

    requirements: this.fb.group({
      deliverables: this.fb.group({
        mainVideo: [false],
        socialMediaCutdowns: [false],
        verticalReels: [false],
        motionGraphics: [false],
        infographics: [false],
        subtitles: [false],
        translations: [false],
        campaignVisuals: [false],
        websiteAssets: [false],
        notSure: [false]
      }),
      materials: this.fb.group({
        rawFootage: [false],
        interviews: [false],
        photos: [false],
        script: [false],
        brandGuidelines: [false],
        previousContent: [false],
        references: [false],
        dataReports: [false]
      })
    }),

    timeBudget: this.fb.group({
      startDate: [''],
      deliverableDate: [''],
      deadlineFlexible: [''],
      budget: ['', Validators.required],
    }),

    additionalDetails: this.fb.group({
      additionalDetails: ['', Validators.maxLength(1000)]
    })
  });
}
