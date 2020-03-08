import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmploreeDetailService } from '../Shared/emploree-detail.service';
import { ToastrService } from 'ngx-toastr';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-farmer-details',
  templateUrl: './farmer-details.component.html',
  styleUrls: ['./farmer-details.component.css']
})
export class FarmerDetailsComponent implements OnInit {

  constructor( private service:EmploreeDetailService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form?:NgForm){
  if(form!=null)
   form.resetForm();
  this.service.farmerData={
id:0,
name:"",
age:"",
quantity:"",
mobile:"",
dob: "",
gender:"",
land:"",
forming: "",
address:""
  }
}

onSubmit(form:NgForm){
  // this.insertNew(form)
  if(this.service.farmerData.id==0)
  this.insertNew(form)
  else
  this.update(form);
}

insertNew(form:NgForm){
  this.service.postFarmerDetail().subscribe(

    res=>{
      this.toastr.success('Submitted Successfully','Employee Register')

      this.resetForm(form);
      // this.toastr.success('Submitted Successfully','Employee Register')
      this.service.refreshList3();
    },
    err=>{
      console.log(err)
    }
  )
}

update(form:NgForm){
  this.service.putFarmerDetail().subscribe(

    res=>{
      this.resetForm(form);
      this.toastr.success('Updated Successfully','Employee Register')
      this.service.refreshList3();
    },
    err=>{
      console.log(err)
    }
  )
}



}
