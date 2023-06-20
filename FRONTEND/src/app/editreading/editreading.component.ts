import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editreading',
  templateUrl: './editreading.component.html',
  styleUrls: ['./editreading.component.scss']
})
export class EditreadingComponent {

  search!:any;
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
  {
    this.getAllStudent();
  }
  getAllStudent() {

    this.http.get("http://localhost:3000/reading/getAll")
    .subscribe((resultData: any)=>
    {

       this.StudentArray = resultData.data;

    });


  }

  setUpdate(data: any)
  {
   this.eid = data.eid;
   this.rid = data.rid;
   this.readingdate = data.readingdate;
   this.duedate = data.duedate;
   this.units = data.units;
   this.bill = data.bill;
   this.status = data.status;
   this.currentStudentID = data._id;

  }

  UpdateRecords()
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

    this.http.patch("http://localhost:3000/reading/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Reading details updated.")
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
    this.http.delete("http://localhost:3000/reading/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Readings deleted.")
        //this.getAllStudent();

    });
    }
register()
  {

    let bodyData = {
      "eid":this.eid,
      "rid":this.eid,
      "readingdate":this.readingdate,
      "duedate":this.duedate,
      "units":this.units,
      "bill":this.bill,
      "status":this.status,

  };
    this.http.post("http://localhost:3000/reading/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("New consumer details Successfully added.")
         //this.getAllEmployee();
        this.eid = '';
        this.rid = '';
        this.readingdate = '';
        this.duedate = '';
        this.units = '';
        this.bill = '';
        this.status = '';
        this.getAllStudent();
    });
  }
}
