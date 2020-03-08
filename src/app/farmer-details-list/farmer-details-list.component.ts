import { Component, OnInit } from '@angular/core';
import { EmploreeDetailService } from '../Shared/emploree-detail.service';
import { ToastrService } from 'ngx-toastr';
import { FarmerData } from '../Shared/farmer-data';

@Component({
  selector: 'app-farmer-details-list',
  templateUrl: './farmer-details-list.component.html',
  styleUrls: ['./farmer-details-list.component.css']
})
export class FarmerDetailsListComponent implements OnInit {


  constructor(private service:EmploreeDetailService,
    private toastr:ToastrService) { }


  ngOnInit() {
    this.service.refreshList3();
   }
   PopulateData(ed :FarmerData){
 
     this.service.farmerData = Object.assign({},ed);
   }
 
   onDelete(empId){
     if(confirm('Are you sure want to delete this record?'))
     this.service.deleteFarmerDetails(empId).subscribe(
       res =>{
        this.service.refreshList3(); 
        this.toastr.warning('Data was deleted','Farmer Register')
       },
       err => {
         console.log("delete check");
         console.log(err);
       }
     );
   }

}
