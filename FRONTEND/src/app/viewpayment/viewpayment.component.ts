import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-viewpayment',
  templateUrl: './viewpayment.component.html',
  styleUrls: ['./viewpayment.component.scss']
})
export class ViewpaymentComponent {

  search!:any;
  StudentArray : any[] = [];
  currentStudentID = "";
  eid:string ="";
  rid:string ="";
  date: string ="";
  status: string ="";

  constructor(private http: HttpClient )
  {
    this.getAllStudent();
  }
  getAllStudent() {

    this.http.get("http://localhost:3000/payment/getAll")
    .subscribe((resultData: any)=>
    {

       this.StudentArray = resultData.data;

    });


  }

  setUpdate(data: any)
  {
   this.eid = data.eid;
   this.rid = data.rid;
   this.date = data.date;
   this.status = data.status;
   this.currentStudentID = data._id;

  }

  UpdateRecords()
  {
    let bodyData = {
      "eid":this.eid,
      "rid":this.rid,
      "date" : this.date,
      "status":this.status,
    };

    this.http.patch("http://localhost:3000/payment/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Payment details updated.")
        this.getAllStudent();

    });
  }

  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }

  }
  setDelete(data: any) {
    this.http.delete("http://localhost:3000/payment/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Payment details deleted.")
        //this.getAllStudent();

    });
    }
register()
  {

    let bodyData = {
      "eid":this.eid,
      "rid":this.rid,
      "date" : this.date,
      "status":this.status,

  };
    this.http.post("http://localhost:3000/payment/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("payment Successful.")
         //this.getAllEmployee();
        this.eid = '';
        this.rid = '';
        this.date = '';
        this.status = '';
        this.getAllStudent();
    });
  }
}
