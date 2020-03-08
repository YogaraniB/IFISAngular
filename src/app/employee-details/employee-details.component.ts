import { Component, OnInit } from '@angular/core';
import { EmploreeDetailService } from '../Shared/emploree-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor( private service:EmploreeDetailService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form?:NgForm){
  if(form!=null)
   form.resetForm();
  this.service.formData={
empId:0,
empName:"",
empQuali:"",
empDesignation:"",
//empAddress:"",
empNumber:null,
cgf: ''
  }
}

onSubmit(form:NgForm){
  // this.insertNew(form)
  if(this.service.formData.empId==0)
  this.insertNew(form)
  else
  this.update(form);
}

insertNew(form:NgForm){
  this.service.postPaymentDetail().subscribe(

    res=>{
      this.resetForm(form);
      this.toastr.success('Submitted Successfully','Employee Register')
      this.service.refreshList();
    },
    err=>{
      console.log(err)
    }
  )
}

update(form:NgForm){
  this.service.putPaymentDetail().subscribe(

    res=>{
      this.resetForm(form);
      this.toastr.success('Updated Successfully','Employee Register')
      this.service.refreshList();
    },
    err=>{
      console.log(err)
    }
  )
}

  
}
