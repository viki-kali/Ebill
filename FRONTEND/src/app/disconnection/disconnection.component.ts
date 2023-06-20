import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-disconnection',
  templateUrl: './disconnection.component.html',
  styleUrls: ['./disconnection.component.scss']
})
export class DisconnectionComponent {
  val:boolean=false;
  search!:any;
  StudentArray : any[] = [];
  currentStudentID = "";
  eid:string ="";
  did:string ="";
  date: string ="";
  time: string ="";
  reason: string ="";
  penalityamt: string ="";
  status: string ="";
  r1!:any;
  r2!:any;
  constructor(private http: HttpClient )
  {
    this.getAllStudent();
  }
  getAllStudent() {

    this.http.get("http://localhost:3000/break/getAll")
    .subscribe((resultData: any)=>
    {

       this.StudentArray = resultData.data;

    });


  }

  setUpdate(data: any)
  {
   this.eid = data.eid;
   this.did = data.did;
   this.date = data.date;
   this.time = data.time;
   this.reason = data.reason;
   this.penalityamt = data.penalityamt;
   this.status = data.status;
   this.currentStudentID = data._id;

  }

  UpdateRecords()
  {
    let bodyData = {
      "eid":this.eid,
      "did":this.did,
      "date" : this.date,
      "time" : this.time,
      "reason" : this.reason,
      "penalityamt" : this.penalityamt,
      "status":this.status,
    };

    this.http.patch("http://localhost:3000/break/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Disconnection details updated.")
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
    this.http.delete("http://localhost:3000/break/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Disconnection deleted.")
        //this.getAllStudent();

    });
    }
register()
  {

    let bodyData = {
      "eid":this.eid,
      "did":this.did,
      "date" : this.date,
      "time" : this.time,
      "reason" : this.reason,
      "penalityamt" : this.penalityamt,
      "status":this.status,

  };
    this.http.post("http://localhost:3000/break/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("New disconnection details added.")
         //this.getAllEmployee();
        this.eid = '';
        this.did = '';
        this.date = '';
        this.time = '';
        this.reason  = '';
        this.penalityamt  = '';
        this.status = '';
        this.getAllStudent();
    });
  }
  setval()
  {
      this.val=true;
  }
}
