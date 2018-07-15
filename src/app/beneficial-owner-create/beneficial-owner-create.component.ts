import { Component, OnInit } from '@angular/core';
import { BeneficialOwner } from '../domain/beneficialOwner';
import { BeneficialOwnerService } from '../beneficial-owner.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-beneficial-owner-create',
  templateUrl: './beneficial-owner-create.component.html',
  styleUrls: ['./beneficial-owner-create.component.css']
})
export class BeneficialOwnerCreateComponent implements OnInit {

  beneficialOwner: BeneficialOwner;
  errors;

  constructor(private beneficialOwnerService: BeneficialOwnerService, private router: Router) { }

  ngOnInit() {
    this.errors = {};
    this.beneficialOwner = new BeneficialOwner();
  }

  createBeneficialOwner() {
    this.beneficialOwnerService.createBeneficialOwner(this.beneficialOwner)
    .subscribe(owner => this.router.navigate(['/beneficialOwners']), 
               error => this.errors = error.error.response);
  }

}
