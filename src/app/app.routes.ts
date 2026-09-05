import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Work } from './pages/work/work';
import { ServicesPage } from './pages/services-page/services-page';
import { Team } from './pages/team/team';
import { Estimate } from './pages/estimate/estimate';
import { CaseStudyPage } from './pages/case-study-page/case-study';
import { Contact } from './pages/contact/contact';
import { BookCall } from './pages/book-call/book-call';
import { Admin } from './pages/admin/admin';
import { AdminCase } from './pages/admin-case/admin-case';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: Homepage, title: 'Tatet' },
  { path: 'work', component: Work, title: 'Our Work' },
  { path: 'services', component: ServicesPage, title: 'Our Services' },
  { path: 'team', component: Team, title: 'Our Team' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: 'estimate', component: Estimate, title: 'Estimate Project' },
  { path: 'case-study/:projectName', component: CaseStudyPage, title: 'Case Study' },
  { path: 'book-a-call', component: BookCall, title: 'Book a Call' },
  { path: 'login', component: Login, title: 'Admin Login' },
  { path: 'admin', component: Admin, title: 'Admin Dashboard', canActivate: [authGuard] },
  { path: 'admin-case/:projectName', component: AdminCase, title: 'Modify Case', canActivate: [authGuard] },
  { path: 'admin-case', component: AdminCase, title: 'Add Case', canActivate: [authGuard] }
];
