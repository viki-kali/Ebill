import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.scss']
})
export class ViewfeedbackComponent {

  search!:any;
  StudentArray : any[] = [];
  currentStudentID = "";
  eid:string ="";
  friendly:string ="";
  design: string ="";
  rating: string ="";
  desc: string ="";

  constructor(private http: HttpClient )
  {
    this.getAllStudent();
  }
  getAllStudent() {

    this.http.get("http://localhost:3000/feed/getAll")
    .subscribe((resultData: any)=>
    {

       this.StudentArray = resultData.data;

    });


  }

  setUpdate(data: any)
  {
   this.eid = data.eid;
   this.friendly = data.friendly;
   this.design = data.design;
   this.rating = data.rating;
   this.desc = data.desc;
   this.currentStudentID = data._id;

  }

  UpdateRecords()
  {
    let bodyData = {
      "eid":this.eid,
      "friendly":this.friendly,
      "design" : this.design,
      "rating" : this.rating,
      "desc" : this.desc,
    };

    this.http.patch("http://localhost:3000/feed/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Service details updated.")
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
    this.http.delete("http://localhost:3000/feed/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Consumer deleted.")
        //this.getAllStudent();

    });
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
        this.getAllStudent();
    });
  }
}
