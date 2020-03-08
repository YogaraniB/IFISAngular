import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  title = 'Simple Example Contact-us page using Angular 4';
  public data:any=[]
 
  
  constructor(private http: HttpClient,private toastr:ToastrService){
  }
 
  save(name, email, mobile, subject, message): void {
    this.data['name']= name;
                this.data['email']= email;
                this.data['mobile']= mobile;
                this.data['subject']= subject;
                this.data['message']= message;
    console.log(this.data);
                //add request to send email or into mysql
                this.http.post<any>('http://localhost:8080/user/service', this.data).subscribe(
        res => {
          console.log(res);
          this.toastr.success('Submitted Successfully','Service Message')
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occurred.");
        }
      });
   }
}
