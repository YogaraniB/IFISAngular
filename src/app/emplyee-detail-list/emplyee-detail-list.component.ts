import { Component, OnInit } from '@angular/core';
import { EmploreeDetailService } from '../Shared/emploree-detail.service';
import { EmployeeData } from '../Shared/employee-data';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emplyee-detail-list',
  templateUrl: './emplyee-detail-list.component.html',
  styleUrls: ['./emplyee-detail-list.component.css']
})
export class EmplyeeDetailListComponent implements OnInit {

  constructor(private service:EmploreeDetailService,
    private toastr:ToastrService) { }

  ngOnInit() {
   this.service.refreshList();
  }
  PopulateData(ed :EmployeeData){

    this.service.formData = Object.assign({},ed);
  }

  onDelete(empId){
    if(confirm('Are you sure want to delete this record?'))
    this.service.deleteDetails(empId).subscribe(
      res =>{
       this.service.refreshList(); 
       this.toastr.warning('Data was deleted','Employee Register')
      },
      err => {
        console.log("delete check");
        console.log(err);
      }
    );
  }

}
