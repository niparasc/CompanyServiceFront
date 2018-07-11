import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficialOwnerCreateComponent } from './beneficial-owner-create.component';

describe('BeneficialOwnerCreateComponent', () => {
  let component: BeneficialOwnerCreateComponent;
  let fixture: ComponentFixture<BeneficialOwnerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficialOwnerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficialOwnerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
