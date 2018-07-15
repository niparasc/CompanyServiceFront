import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../domain/company';
import { BeneficialOwnerService } from '../beneficial-owner.service';
import { BeneficialOwner } from '../domain/beneficialOwner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-add-owner',
  templateUrl: './company-add-owner.component.html',
  styleUrls: ['./company-add-owner.component.css']
})
export class CompanyAddOwnerComponent implements OnInit {

  company: Company
  beneficialOwners: BeneficialOwner[];
  selectedOwner: BeneficialOwner;
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
    this.selectedOwner = new BeneficialOwner();
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

  addOwner(): void {
    if (!this.selectedOwner.id) {
      this.errors = {beneficialOwners: "You must select an owner"};
      return;
    }

    this.companyService.addOwnersToCompany(this.company, {"beneficialOwnerIds": [this.selectedOwner.id]})
                       .subscribe(company => this.router.navigate(['/companies/' + this.company.id]),
                                  error => this.errors = error.error.response);
  }

}
