import { Routes } from '@angular/router';
import {CompaniesComponent} from './companies/companies.component';

export const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: 'companies', component: CompaniesComponent}
];
