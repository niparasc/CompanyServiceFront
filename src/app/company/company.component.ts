import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CompanyService } from '../company.service';
import { Company } from '../domain/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company: Company

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private location: Location
  ) {}

  ngOnInit() {
    this.company = { id: undefined, name: undefined, address: undefined, city: undefined, country: undefined, email: undefined, phone: undefined, beneficialOwners: undefined };
    this.getCompany();
  }

  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id)
      .subscribe(company => this.company = company);
  }

}
