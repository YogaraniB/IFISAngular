import { Component, OnInit } from '@angular/core';
import { vendor } from '../Shared/vendor';
import { ToastrService } from 'ngx-toastr';
import { EmploreeDetailService } from '../Shared/emploree-detail.service';

@Component({
  selector: 'app-vendor-detail-list',
  templateUrl: './vendor-detail-list.component.html',
  styleUrls: ['./vendor-detail-list.component.css']
})
export class VendorDetailListComponent implements OnInit {

  
  constructor(private service:EmploreeDetailService,
    private toastr:ToastrService) { }

  ngOnInit() {
   this.service.refreshList4();
  }
  PopulateData(ed :vendor){

    this.service.vendorData = Object.assign({},ed);
  }

  onDelete(empId){
    if(confirm('Are you sure want to delete this record?'))
    this.service.deleteVendorDetails(empId).subscribe(
      res =>{
       this.service.refreshList4(); 
       this.toastr.warning('Data was deleted','Employee Register')
      },
      err => {
        console.log("delete check");
        console.log(err);
      }
    );
  }
}
