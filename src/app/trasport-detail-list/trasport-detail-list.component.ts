import { Component, OnInit } from '@angular/core';
import { transport } from '../Shared/transport';
import { ToastrService } from 'ngx-toastr';
import { EmploreeDetailService } from '../Shared/emploree-detail.service';

@Component({
  selector: 'app-trasport-detail-list',
  templateUrl: './trasport-detail-list.component.html',
  styleUrls: ['./trasport-detail-list.component.css']
})
export class TrasportDetailListComponent implements OnInit {

 
  constructor(private service:EmploreeDetailService,
    private toastr:ToastrService) { }

  ngOnInit() {
   this.service.refreshList5();
  }
  PopulateData(ed :transport){

    this.service.transportData = Object.assign({},ed);
  }

  onDelete(empId){
    if(confirm('Are you sure want to delete this record?'))
    this.service.deleteTransportDetails(empId).subscribe(
      res =>{
       this.service.refreshList5(); 
       this.toastr.warning('Data was deleted','Employee Register')
      },
      err => {
        console.log("delete check");
        console.log(err);
      }
    );
  }


}
