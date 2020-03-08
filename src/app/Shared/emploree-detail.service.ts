import { Injectable } from '@angular/core';
import { EmployeeData } from './employee-data';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { farmer } from './farmer';
import { customer } from './cutomer';
import { vendor } from './vendor';
import { transport } from './transport';

let headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
});


@Injectable({
  providedIn: 'root'
})
export class EmploreeDetailService {

  appurl = 'http://localhost:8080/user';
  // appurl1 = 'http://localhost:8080/ifis';
  list: EmployeeData[];
  list2: farmer[];
  list1:customer[];
  list3:vendor[];
  list4:transport[];
  formData: EmployeeData;
  farmerData: farmer;
  customerData:customer;
  vendorData:vendor;
  transportData:transport;
  constructor(private httpClient: HttpClient) { }

  postPaymentDetail() {
    let options = { headers: headers };
    return this.httpClient.post(this.appurl + '/usersave', this.formData, options);
  }
  putPaymentDetail() {
    return this.httpClient.put(this.appurl + "/user/" + this.formData.empId, this.formData);
  }
  deleteDetails(id) {
    return this.httpClient.delete(this.appurl + '/delete/' + id);
  }

  refreshList() {
    console.log('emp data');
    this.httpClient.get(this.appurl + '/user').subscribe((res: EmployeeData[]) => {
      this.list = res;
      console.log('emp check');
    })
  }

  postFarmerDetail() {
    let options = { headers: headers };
    return this.httpClient.post(this.appurl + '/farmersave', this.farmerData, options);
  }
  putFarmerDetail() {
    return this.httpClient.put(this.appurl + "/farmer/" + this.farmerData.id, this.farmerData);
  }
  deleteFarmerDetails(id) {
    return this.httpClient.delete(this.appurl + '/deletefarmer/' + id);
  }

  refreshList3() {
    console.log('emp data');
    this.httpClient.get(this.appurl + '/farmer').subscribe((res: farmer[]) => {
     
      console.log(res);
      this.list2 = res;
      console.log('emp check');
    })
  } 

  postCustomerDetail() {
    let options = { headers: headers };
    return this.httpClient.post(this.appurl + '/customersave', this.customerData, options);
  }
  putCustomerDetail() {
    return this.httpClient.put(this.appurl + "/customerupdate/" + this.customerData.id, this.customerData);
  }
  deleteCustomerDetails(id) {
    return this.httpClient.delete(this.appurl + '/deletecustomer/' + id);
  }

  refreshList1() {
    console.log('emp data');
    this.httpClient.get(this.appurl + '/customer').subscribe((res: customer[]) => {
      this.list1 = res;
      console.log('emp check');
    })
  }

  postVendorDetail() {
    let options = { headers: headers };
    return this.httpClient.post(this.appurl + '/vendorsave', this.vendorData, options);
  }
  putVendorDetail() {
    return this.httpClient.put(this.appurl + "/vendorupdate/" + this.vendorData.id, this.vendorData);
  }
  deleteVendorDetails(id) {
    return this.httpClient.delete(this.appurl + '/deletevendor/' + id);
  }

  refreshList4() {
    console.log('emp data');
    this.httpClient.get(this.appurl + '/vendor').subscribe((res: vendor[]) => {
      this.list3 = res;
      console.log('emp check');
    })
  }

  
  postTransportDetail() {
    let options = { headers: headers };
    return this.httpClient.post(this.appurl + '/transportsave', this.transportData, options);
  }
  putTransportDetail() {
    return this.httpClient.put(this.appurl + "/transportupdate/" + this.transportData.id, this.transportData);
  }
  deleteTransportDetails(id) {
    return this.httpClient.delete(this.appurl + '/deletetransport/' + id);
  }

  refreshList5() {
    console.log('emp data');
    this.httpClient.get(this.appurl + '/transport').subscribe((res: transport[]) => {
      this.list4 = res;
      console.log('emp check');
    })
  }

}
