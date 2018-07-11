import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompaniesComponent } from './companies/companies.component'
import { CompanyComponent } from './company/company.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { BeneficialOwnerComponent } from './beneficial-owner/beneficial-owner.component';
import { BeneficialOwnersComponent } from './beneficial-owners/beneficial-owners.component';
import { BeneficialOwnerCreateComponent } from './beneficial-owner-create/beneficial-owner-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/:id', component: CompanyComponent },
  { path: 'companyCreate', component: CompanyCreateComponent },
  { path: 'beneficialOwners', component: BeneficialOwnersComponent },
  { path: 'beneficialOwners/:id', component: BeneficialOwnerComponent },
  { path: 'beneficialOwnerCreate', component: BeneficialOwnerCreateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
