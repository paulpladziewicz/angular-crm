import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-create-company',
  imports: [
    ReactiveFormsModule,
    Button,
    InputText
  ],
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.css'
})
export class CreateCompanyComponent implements OnInit {
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
    console.log('starting');
    if (this.companyForm.valid) {
      console.log('valid');
    } else {
      console.log('false');
    }
  }

  get form() {
    return this.companyForm.controls;
  }
}
