import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareitService } from "../shareit/shareit.service"
@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.scss']
})
export class AddfeedbackComponent implements OnInit {

  search!:any;
  StudentArray : any[] = [];
  currentStudentID = "";
  eid:string ="";
  friendly:string ="";
  design: string ="";
  rating: string ="";
  desc: string ="";

  constructor(private http: HttpClient,private k1:ShareitService )
  {
  }
  ngOnInit():void
  {
    this.eid=this.k1.getkey();
  }
register()
  {

    let bodyData = {
      "eid":this.eid,
      "friendly":this.friendly,
      "design" : this.design,
      "rating" : this.rating,
      "desc" : this.desc,

  };
    this.http.post("http://localhost:3000/feed/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("New feedback details added.")
         //this.getAllEmployee();
        this.eid = '';
        this.friendly = '';
        this.design = '';
        this.rating = '';
        this.desc  = '';
    });
  }
}
