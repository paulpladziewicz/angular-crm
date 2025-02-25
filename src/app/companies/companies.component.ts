import {Component, OnInit} from '@angular/core';
import {Company, CompanyService} from '../services/company.service';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-companies',
  imports: [ButtonModule, KnobModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.fetchCompanies();
  }

  fetchCompanies(): void {
    this.companyService.getAll().subscribe({
      next: (data) => {
        this.companies = data;
      }
    })
  }

  createCompany(company: Company): void {
    this.companyService.create(company).subscribe({
    })
  }
}
