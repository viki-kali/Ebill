import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-addconsumer',
  templateUrl: './addconsumer.component.html',
  styleUrls: ['./addconsumer.component.scss']
})
export class AddconsumerComponent {
  StudentArray : any[] = [];
  currentStudentID = "";
  eid:string ="";
  password:string ="";
  name: string ="";
  address: string ="";
  phone: string ="";
  constructor(private http: HttpClient )
  {}


register()
  {

    let bodyData = {
      "eid":this.eid,
      "password":this.password,
      "name" : this.name,
      "address" : this.address,
      "phone" : this.phone,
  };
    this.http.post("http://localhost:3000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("New consumer added.")
         //this.getAllEmployee();
        this.eid = '';
        this.password = '';
        this.name = '';
        this.address = '';
        this.phone  = '';
    });
  }
}
