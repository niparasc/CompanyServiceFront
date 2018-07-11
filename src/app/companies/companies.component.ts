import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../domain/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies()
      .subscribe(companies => this.companies = companies);
  }

}
