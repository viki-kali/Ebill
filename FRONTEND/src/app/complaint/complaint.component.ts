import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareitService } from "../shareit/shareit.service"
@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit{

  currentStudentID = "";
  eid:string ="";
  sid:string ="";
  complaintdate: string ="";
  desc: string ="";
  resolvedate: string ="";
  status: string ="";
  constructor(private http: HttpClient,private k1:ShareitService )
  {}
  ngOnInit():void
  {
    this.eid=this.k1.getkey();
  }

register()
  {

    let bodyData = {
      "eid":this.eid,
      "sid":this.sid,
      "complaintdate" : this.complaintdate,
      "desc" : this.desc,
      "resolvedate" : this.resolvedate,
      "status":this.status,

  };
    this.http.post("http://localhost:3000/service/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Complaint registered.")
         //this.getAllEmployee();
        this.eid = '';
        this.sid = '';
        this.complaintdate = '';
        this.desc = '';
        this.resolvedate  = '';
        this.status = '';
    });
  }
}

