import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BeneficialOwner } from './domain/beneficialOwner';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeneficialOwnerService {

  private ownersUrl = 'https://mighty-caverns-62961.herokuapp.com/beneficialOwners';

  constructor(private http: HttpClient) { }

  getBeneficialOwners(): Observable<BeneficialOwner[]> {
    return this.http.get<BeneficialOwner[]>(this.ownersUrl);
  }

  createBeneficialOwner (owner: BeneficialOwner): Observable<BeneficialOwner> {
    return this.http.post<BeneficialOwner>(this.ownersUrl, owner);
  }

}
