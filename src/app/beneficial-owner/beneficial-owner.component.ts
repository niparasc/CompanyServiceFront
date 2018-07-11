import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BeneficialOwner } from '../domain/beneficialOwner';
import { BeneficialOwnerService } from '../beneficial-owner.service';

@Component({
  selector: 'app-beneficial-owner',
  templateUrl: './beneficial-owner.component.html',
  styleUrls: ['./beneficial-owner.component.css']
})
export class BeneficialOwnerComponent implements OnInit {

  beneficialOwner: BeneficialOwner;

  constructor(
    private route: ActivatedRoute,
    private beneficialOwnerService: BeneficialOwnerService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getBeneficialOwner();
  }

  getBeneficialOwner(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.beneficialOwnerService.getBeneficialOwner(id)
      .subscribe(owner => this.beneficialOwner = owner);
  }

}
