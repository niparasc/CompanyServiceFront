import { Component, OnInit } from '@angular/core';
import { BeneficialOwner } from '../domain/beneficialOwner';
import { BeneficialOwnerService } from '../beneficial-owner.service';

@Component({
  selector: 'app-beneficial-owner-create',
  templateUrl: './beneficial-owner-create.component.html',
  styleUrls: ['./beneficial-owner-create.component.css']
})
export class BeneficialOwnerCreateComponent implements OnInit {

  beneficialOwner: BeneficialOwner;

  constructor(private beneficialOwnerService: BeneficialOwnerService) { }

  ngOnInit() {
    this.beneficialOwner = { id: undefined, firstName: undefined, lastName: undefined };
  }

  save() {

  }

}
