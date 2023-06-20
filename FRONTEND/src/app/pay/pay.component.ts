import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareitService } from "../shareit/shareit.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit{
  StudentArray : any[] = [];
  currentStudentID = "";
  search:string ="";
  eid:string ="";
  rid:string ="";
  date: string =new Date().toLocaleString();
  status:string="Paid";
  constructor(private router: Router,private http: HttpClient,private k1:ShareitService )
  {
        this.getreadings();
  }
  ngOnInit():void
  {
    this.search=this.k1.getrid();
  }
  getreadings() {

    this.http.get("http://localhost:3000/reading/getAll")
    .subscribe((resultData: any)=>
    {

       this.StudentArray = resultData.data;

    });
  }
  makepayment(data:any)
  {
    alert("Payment paid");
    this.currentStudentID = data._id;
    let bodyData = {
      "eid":data.eid,
      "rid":data.rid,
      "readingdate":data.readingdate,
      "duedate":data.duedate,
      "units":data.units,
      "bill":data.bill,
      "status":this.status,
    };

    this.http.patch("http://localhost:3000/reading/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log("Status updated");

    });

      let bodyData1 = {
      "eid":data.eid,
      "rid":data.rid,
      "date" : this.date,
      "status":this.status,

  };
    this.http.post("http://localhost:3000/payment/create",bodyData1).subscribe((resultData: any)=>
    {
        console.log("Payment added");
    });

  }
}
