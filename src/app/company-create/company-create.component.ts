import { Component, OnInit } from '@angular/core';
import { Company } from '../domain/company';
import { BeneficialOwner } from '../domain/beneficialOwner';
import { CompanyService } from '../company.service';
import { BeneficialOwnerService } from '../beneficial-owner.service'

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {

  company: Company
  beneficialOwners: BeneficialOwner[];

  constructor(private companyService: CompanyService,
              private beneficialOwnerService: BeneficialOwnerService) { }

  ngOnInit() {
    this.company = { id: undefined, name: undefined, address: undefined, city: undefined, country: undefined, email: undefined, phone: undefined, beneficialOwners: undefined };
    this.getBeneficialOwners();
  }

  getBeneficialOwners(): void {
    this.beneficialOwnerService.getBeneficialOwners()
      .subscribe(owners => this.beneficialOwners = owners);
  }

  save() {

  }

}
