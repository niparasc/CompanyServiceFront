import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from './domain/company';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  // private companiesUrl = 'https://mighty-caverns-62961.herokuapp.com/companies';
  private companiesUrl = 'http://localhost:8080/companies';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl);
  }

  getCompany(id: number): Observable<Company> {
    const url = `${this.companiesUrl}/${id}`;
    return this.http.get<Company>(url);
  }

}
