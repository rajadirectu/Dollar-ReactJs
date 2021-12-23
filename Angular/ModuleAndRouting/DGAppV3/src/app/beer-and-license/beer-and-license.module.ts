import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerAndLicenseRoutingModule } from './beer-and-license-routing.module';
import { StoreLicenseSetupComponent } from './store-license-setup/store-license-setup.component';


@NgModule({
  declarations: [
    StoreLicenseSetupComponent
  ],
  imports: [
    CommonModule,
    BeerAndLicenseRoutingModule
  ]
})
export class BeerAndLicenseModule { }
