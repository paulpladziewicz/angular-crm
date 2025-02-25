import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-create-company',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.css'
})
export class CreateCompanyComponent implements OnInit {
  companyService = inject(CompanyService);
  companyForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.companyForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      address: [''],
      description: ['']
     })
  }

  onSubmit(): void {
    if (this.companyForm.valid) {
      console.log(this.companyForm.value);
      this.companyService.create(this.companyForm.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => {
          console.error(e);
        }
      });
    } else {
      console.log('form incomplete');
      console.log(this.companyForm.get('name'));
    }
  }
}
