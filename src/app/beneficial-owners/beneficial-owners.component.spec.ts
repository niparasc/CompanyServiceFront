import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficialOwnersComponent } from './beneficial-owners.component';

describe('BeneficialOwnersComponent', () => {
  let component: BeneficialOwnersComponent;
  let fixture: ComponentFixture<BeneficialOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficialOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficialOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
