import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreLicenseSetupComponent } from './store-license-setup/store-license-setup.component';

const routes: Routes = [
  { 
    path: '',
   component: StoreLicenseSetupComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerAndLicenseRoutingModule { }
