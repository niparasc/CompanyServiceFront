import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BeneficialOwner } from './domain/beneficialOwner';
import { OWNERS } from './mocks/mock-beneficialOwners';

@Injectable({
  providedIn: 'root'
})
export class BeneficialOwnerService {

  constructor() { }

  getBeneficialOwners(): Observable<BeneficialOwner[]> {
    return of(OWNERS);
  }

  getBeneficialOwner(id: number): Observable<BeneficialOwner> {
    return of(OWNERS.find(owner => owner.id === id));
  }

}
