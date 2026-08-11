import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Work } from './pages/work/work';
import { ServicesPage } from './pages/services-page/services-page';
import { Team } from './pages/team/team';
import { Estimate } from './pages/estimate/estimate';
import { PublicLayout } from './layouts/public-layout/public-layout';
import { CaseStudy } from './pages/case-study-page/case-study';
import { Contact } from './pages/contact/contact';
import { BookCall } from './pages/book-call/book-call';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Homepage, title: 'Tatet' },
      { path: 'work', component: Work, title: 'Our Work' },
      { path: 'services', component: ServicesPage, title: 'Our Services' },
      { path: 'team', component: Team, title: 'Our Team' },
      { path: 'contact', component: Contact, title: 'Contact' },
      { path: 'estimate', component: Estimate, title: 'Estimate Project' },
      { path: 'case-study/:projectName', component: CaseStudy, title: 'Case Study' },
      { path: 'book-a-call', component: BookCall, title: 'Book a Call' }
    ],
  },
];
