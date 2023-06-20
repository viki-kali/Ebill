import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-addreading',
  templateUrl: './addreading.component.html',
  styleUrls: ['./addreading.component.scss']
})
export class AddreadingComponent {
  StudentArray : any[] = [];
  currentStudentID = "";
  eid:string ="";
  rid:string ="";
  readingdate: string ="";
  duedate: string ="";
  units: string ="";
  bill: string ="";
  status: string ="";
  constructor(private http: HttpClient )
  {}


register()
  {

    let bodyData = {
      "eid":this.eid,
      "rid":this.rid,
      "readingdate":this.readingdate,
      "duedate":this.duedate,
      "units":this.units,
      "bill":this.bill,
      "status":this.status,

  };
    this.http.post("http://localhost:3000/reading/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Readings added.")
         //this.getAllEmployee();
        this.eid = '';
        this.rid = '';
        this.readingdate = '';
        this.duedate = '';
        this.units = '';
        this.bill = '';
        this.status = '';
    });
  }
}
