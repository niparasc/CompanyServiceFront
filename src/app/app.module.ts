import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './company/company.component';
import { AppRoutingModule } from './/app-routing.module';
import { BeneficialOwnerComponent } from './beneficial-owner/beneficial-owner.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BeneficialOwnersComponent } from './beneficial-owners/beneficial-owners.component';
import { BeneficialOwnerCreateComponent } from './beneficial-owner-create/beneficial-owner-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompanyComponent,
    BeneficialOwnerComponent,
    CompanyCreateComponent,
    DashboardComponent,
    BeneficialOwnersComponent,
    BeneficialOwnerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
