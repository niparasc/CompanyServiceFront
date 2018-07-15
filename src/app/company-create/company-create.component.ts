import { Component, OnInit } from '@angular/core';
import { Company } from '../domain/company';
import { BeneficialOwner } from '../domain/beneficialOwner';
import { CompanyService } from '../company.service';
import { BeneficialOwnerService } from '../beneficial-owner.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

  company: Company;
  beneficialOwners: BeneficialOwner[];
  errors;

  constructor(private companyService: CompanyService,
              private beneficialOwnerService: BeneficialOwnerService,
              private router: Router) { }

  ngOnInit() {
    this.errors = {};
    this.company = new Company();
    this.getBeneficialOwners();
  }

  getBeneficialOwners(): void {
    this.beneficialOwnerService.getBeneficialOwners()
      .subscribe(owners => this.beneficialOwners = owners);
  }

  createCompany() {
    this.companyService.createCompany(this.company)
    .subscribe(company => this.router.navigate(['/companies']), 
               error => this.errors = error.error.response);
  }

}
