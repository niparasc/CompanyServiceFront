import { Injectable } from '@angular/core';
import { COMPANIES } from './mocks/mock-companies';
import { Observable, of } from 'rxjs';
import { Company } from './domain/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompanies(): Observable<Company[]> {
    return of(COMPANIES);
  }

  getCompany(id: number): Observable<Company> {
    return of(COMPANIES.find(company => company.id === id));
  }

}
