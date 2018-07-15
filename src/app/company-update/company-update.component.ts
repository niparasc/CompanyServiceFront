import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CompanyService } from '../company.service';
import { BeneficialOwnerService } from '../beneficial-owner.service'
import { Company } from '../domain/company';
import { BeneficialOwner } from '../domain/beneficialOwner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

  company: Company;
  beneficialOwners: BeneficialOwner[];
  errors;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private beneficialOwnerService: BeneficialOwnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.errors = {};
    this.company = new Company();
    this.getCompany();
    this.getBeneficialOwners();
  }

  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id)
      .subscribe(company => this.company = company);
  }

  getBeneficialOwners(): void {
    this.beneficialOwnerService.getBeneficialOwners()
      .subscribe(owners => this.beneficialOwners = owners);
  }

  updateCompany() {
    this.companyService.updateCompany(this.company)
    .subscribe(company => this.router.navigate(['/companies/' + this.company.id]), 
               error => this.errors = error.error.response);
  }

  compareOwners(o1: BeneficialOwner, o2: BeneficialOwner) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

}
