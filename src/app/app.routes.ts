import { Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CreateCompanyComponent } from './companies/create-company/create-company.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  { path: 'companies', component: CompaniesComponent},
  { path: 'create/company', component: CreateCompanyComponent},
  { path: '**', component: PageNotFoundComponent },
];
