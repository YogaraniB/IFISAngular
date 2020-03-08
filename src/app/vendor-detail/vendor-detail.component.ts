import { Component, OnInit } from '@angular/core';
import { EmploreeDetailService } from '../Shared/emploree-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {


  constructor(private service: EmploreeDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.vendorData = {
      id: 0,
      name: "",
      mobile: "",
      age: "",
      address: "",
      dob: null,
      gender: ''
    }
  }

  onSubmit(form: NgForm) {
    // this.insertNew(form)
    if (this.service.vendorData.id == 0)
      this.insertNew(form)
    else
      this.update(form);
  }

  insertNew(form: NgForm) {
    this.service.postVendorDetail().subscribe(

      res => {
        this.resetForm(form);
        this.toastr.success('Submitted Successfully', 'Vendor Register')
        this.service.refreshList4();
      },
      err => {
        console.log(err)
      }
    )
  }

  update(form: NgForm) {
    this.service.putVendorDetail().subscribe(

      res => {
        this.resetForm(form);
        this.toastr.success('Updated Successfully', 'Vendor Register')
        this.service.refreshList4();
      },
      err => {
        console.log(err)
      }
    )
  }

}
