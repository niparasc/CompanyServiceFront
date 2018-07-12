import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAddOwnerComponent } from './company-add-owner.component';

describe('CompanyAddOwnerComponent', () => {
  let component: CompanyAddOwnerComponent;
  let fixture: ComponentFixture<CompanyAddOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAddOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAddOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
