import { Component, OnInit, ViewChild } from '@angular/core';
import { BusinessLicenseService } from 'src/app/business-license.service';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [BusinessLicenseService]
})
export class ListComponent implements OnInit {
  store = new FormControl('');
  dataSource:any = [];
  @ViewChild(MatPaginator) paginator : MatPaginator;
  displayedColumns: string[] = ['Store', 'City', 'Country', 'Vendor','Name','LicenseType','ExpirationDate','LicenseYear'];
  constructor(private blservice: BusinessLicenseService) { 
    
    this.blservice.getData().subscribe(data=>{
      console.warn(data), 
      this.dataSource = new MatTableDataSource(data),      
      console.warn(this.dataSource)
    });    
  }
  getDataByStore(id:string){
    this.blservice.getDataByStore(id).subscribe(data=>{
      this.dataSource = new MatTableDataSource(data),  
      this.dataSource.filter = id,    
      console.log(id)
    });    
  }
  
  ngOnInit(): void {
     //this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit():void {
   // @ViewChild(MatPaginator) paginator : MatPaginator;
    this.dataSource.paginator = this.paginator;
    }

}
