import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmploreeDetailService } from '../Shared/emploree-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trasport-detail',
  templateUrl: './trasport-detail.component.html',
  styleUrls: ['./trasport-detail.component.css']
})
export class TrasportDetailComponent implements OnInit {

  constructor( private service:EmploreeDetailService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form?:NgForm){
  if(form!=null)
   form.resetForm();
  this.service.transportData={
id:0,
drivername:"",
mobile:"",
dob:"",
address:"",
location:null,
mail: '',
gender:'',
vehicle:''
  }
}

onSubmit(form:NgForm){
  // this.insertNew(form)
  if(this.service.transportData.id==0)
  this.insertNew(form)
  else
  this.update(form);
}

insertNew(form:NgForm){
  this.service.postTransportDetail().subscribe(

    res=>{
      this.resetForm(form);
      this.toastr.success('Submitted Successfully','Customer Register')
      this.service.refreshList5();
    },
    err=>{
      console.log(err)
    }
  )
}

update(form:NgForm){
  this.service.putTransportDetail().subscribe(

    res=>{
      this.resetForm(form);
      this.toastr.success('Updated Successfully','Transport Register')
      this.service.refreshList5();
    },
    err=>{
      console.log(err)
    }
  )
}

}
