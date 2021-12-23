import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessLicenseComponent } from './business-license/business-license.component';
import { DetailComponent } from './detail/detail.component';
import { HistoryComponent } from './history/history.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path:'businesslicense',
    component: BusinessLicenseComponent,
    children: [
      {
        path:'list',
        component: ListComponent
      },
      {
        path:'detail',
        component: DetailComponent
      },
      {
        path:'history',
        component: HistoryComponent
      }
    ]
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessLicenseRoutingModule { }
