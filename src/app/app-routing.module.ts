import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompaniesComponent } from './companies/companies.component'
import { CompanyComponent } from './company/company.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyUpdateComponent } from './company-update/company-update.component';
import { CompanyAddOwnerComponent } from './company-add-owner/company-add-owner.component';
import { BeneficialOwnersComponent } from './beneficial-owners/beneficial-owners.component';
import { BeneficialOwnerCreateComponent } from './beneficial-owner-create/beneficial-owner-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/:id', component: CompanyComponent },
  { path: 'companyCreate', component: CompanyCreateComponent },
  { path: 'companyUpdate/:id', component: CompanyUpdateComponent },
  { path: 'companyAddOwner/:id', component: CompanyAddOwnerComponent },
  { path: 'beneficialOwners', component: BeneficialOwnersComponent },
  { path: 'beneficialOwnerCreate', component: BeneficialOwnerCreateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
