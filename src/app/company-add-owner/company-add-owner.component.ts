import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CompanyService } from '../company.service';
import { Company } from '../domain/company';
import { BeneficialOwnerService } from '../beneficial-owner.service';
import { BeneficialOwner } from '../domain/beneficialOwner';

@Component({
  selector: 'app-company-add-owner',
  templateUrl: './company-add-owner.component.html',
  styleUrls: ['./company-add-owner.component.css']
})
export class CompanyAddOwnerComponent implements OnInit {

  company: Company
  beneficialOwners: BeneficialOwner[];

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private location: Location,
    private beneficialOwnerService: BeneficialOwnerService
  ) {}

  ngOnInit() {
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
      .subscribe(beneficialOwners => this.beneficialOwners = beneficialOwners);
  }

}
