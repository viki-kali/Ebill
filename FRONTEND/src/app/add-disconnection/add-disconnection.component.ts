import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-disconnection',
  templateUrl: './add-disconnection.component.html',
  styleUrls: ['./add-disconnection.component.scss']
})
export class AddDisconnectionComponent {

  currentStudentID = "";
  eid:string ="";
  did: string ="";
  date: string ="";
  time: string ="";
  reason: string ="";
  penalityamt: string ="";
  status: string ="";
  constructor(private http: HttpClient )
  {}

register()
  {

    let bodyData = {
      "eid":this.eid,
      "did" : this.did,
      "date" : this.date,
      "time" : this.time,
      "reason":this.reason,
      "penalityamt":this.penalityamt,
      "status":this.status,

  };
    this.http.post("http://localhost:3000/break/create",bodyData).subscribe((resultData: any)=>
    {
        alert("Disconnection details added.")
         //this.getAllEmployee();
        this.eid = '';
        this.did = '';
        this.date = '';
        this.time  = '';
        this.reason = '';
        this.penalityamt = '';
        this.status = '';
    });
  }
}
