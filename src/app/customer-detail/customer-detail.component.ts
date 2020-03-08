import { Component, OnInit } from '@angular/core';
import { EmploreeDetailService } from '../Shared/emploree-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  constructor( private service:EmploreeDetailService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form?:NgForm){
  if(form!=null)
   form.resetForm();
  this.service.customerData={
id:0,
name:"",
mobile:"",
age:"",
address:"",
dob:null,
purchase: '',
gender:''
  }
}

onSubmit(form:NgForm){
  // this.insertNew(form)
  if(this.service.customerData.id==0)
  this.insertNew(form)
  else
  this.update(form);
}

insertNew(form:NgForm){
  this.service.postCustomerDetail().subscribe(

    res=>{
      this.resetForm(form);
      this.toastr.success('Submitted Successfully','Customer Register')
      this.service.refreshList1();
    },
    err=>{
      console.log(err)
    }
  )
}

update(form:NgForm){
  this.service.putCustomerDetail().subscribe(

    res=>{
      this.resetForm(form);
      this.toastr.success('Updated Successfully','Customer Register')
      this.service.refreshList1();
    },
    err=>{
      console.log(err)
    }
  )
}

}
