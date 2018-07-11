import { Component, OnInit } from '@angular/core';
import { BeneficialOwnerService } from '../beneficial-owner.service';
import { BeneficialOwner } from '../domain/beneficialOwner';

@Component({
  selector: 'app-beneficial-owners',
  templateUrl: './beneficial-owners.component.html',
  styleUrls: ['./beneficial-owners.component.css']
})
export class BeneficialOwnersComponent implements OnInit {

  beneficialOwners: BeneficialOwner[];

  constructor(private beneficialOwnerService: BeneficialOwnerService) { }

  ngOnInit() {
    this.getBeneficialOwners();
  }

  getBeneficialOwners(): void {
    this.beneficialOwnerService.getBeneficialOwners()
      .subscribe(beneficialOwners => this.beneficialOwners = beneficialOwners);
  }

}
