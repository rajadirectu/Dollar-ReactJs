import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./core/core.module')
      .then(m => m.CoreModule)
  },
  {
    path: 'StoreLicenseSetup',
    loadChildren: () => import('./beer-and-license/beer-and-license.module')
      .then(m => m.BeerAndLicenseModule)
  },
  {
    path: 'businesslicense',
    loadChildren: () => import('./business-license/business-license.module')
      .then(m => m.BusinessLicenseModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
