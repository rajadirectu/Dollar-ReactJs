import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessLicenseRoutingModule } from './business-license-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { HistoryComponent } from './history/history.component';
import { BusinessLicenseComponent } from './business-license/business-license.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    HistoryComponent,
    BusinessLicenseComponent
  ],
  imports: [
    CommonModule,
    BusinessLicenseRoutingModule,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatInputModule
  ]
})
export class BusinessLicenseModule { }
