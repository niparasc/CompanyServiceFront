import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './domain/company';
import { HttpClient } from '@angular/common/http';
import { BeneficialOwner } from './domain/BeneficialOwner';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companiesUrl = 'http://localhost:8080/companies';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl);
  }

  getCompany(id: number): Observable<Company> {
    const url = `${this.companiesUrl}/${id}`;
    return this.http.get<Company>(url);
  }

  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.companiesUrl, company);
  }

  updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>(this.companiesUrl + "/" + company.id, company);
  }

  addOwnersToCompany(company: Company, owners: Object): Observable<Company> {
    return this.http.post<Company>(this.companiesUrl + "/" + company.id + "/beneficialOwners", owners);
  }

}
