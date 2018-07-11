import { TestBed, inject } from '@angular/core/testing';

import { BeneficialOwnerService } from './beneficial-owner.service';

describe('BeneficialOwnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeneficialOwnerService]
    });
  });

  it('should be created', inject([BeneficialOwnerService], (service: BeneficialOwnerService) => {
    expect(service).toBeTruthy();
  }));
});
