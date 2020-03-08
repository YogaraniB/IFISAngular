import { Component, OnInit } from '@angular/core';
import { customer } from '../Shared/cutomer';
import { ToastrService } from 'ngx-toastr';
import { EmploreeDetailService } from '../Shared/emploree-detail.service';

@Component({
  selector: 'app-customer-detail-list',
  templateUrl: './customer-detail-list.component.html',
  styleUrls: ['./customer-detail-list.component.css']
})
export class CustomerDetailListComponent implements OnInit {

  
  constructor(private service:EmploreeDetailService,
    private toastr:ToastrService) { }

  ngOnInit() {
   this.service.refreshList1();
  }
  PopulateData(ed :customer){

    this.service.customerData = Object.assign({},ed);
  }

  onDelete(empId){
    if(confirm('Are you sure want to delete this record?'))
    this.service.deleteCustomerDetails(empId).subscribe(
      res =>{
       this.service.refreshList1(); 
       this.toastr.warning('Data was deleted','Employee Register')
      },
      err => {
        console.log("delete check");
        console.log(err);
      }
    );
  }

}
