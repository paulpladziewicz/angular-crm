import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Company {
  id: number;
  name: string;
  industry: string;
  address?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/companies`);
  }

  getById(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/company/${id}`)
  }

  create(company: Company): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/create/company`, company)
  }

  update(company: Company): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/update/company/${company.id}`, company)
  }

  delete(id:number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/update/company/${id}`)
  }
}
