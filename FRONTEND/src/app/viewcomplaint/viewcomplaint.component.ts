import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-viewcomplaint',
  templateUrl: './viewcomplaint.component.html',
  styleUrls: ['./viewcomplaint.component.scss']
})
export class ViewcomplaintComponent {

  val:boolean=false;
  search!:any;
  StudentArray : any[] = [];
  currentStudentID = "";
  eid:string ="";
  sid:string ="";
  complaintdate: string ="";
  desc: string ="";
  resolvedate: string ="";
  status: string ="";
  r1!:any;
  r2!:any;
  constructor(private http: HttpClient )
  {
    this.getAllStudent();
  }
  getAllStudent() {

    this.http.get("http://localhost:3000/service/getAll")
    .subscribe((resultData: any)=>
    {

       this.StudentArray = resultData.data;

    });


  }

  setUpdate(data: any)
  {
   this.eid = data.eid;
   this.sid = data.sid;
   this.complaintdate = data.complaintdate;
   this.desc = data.desc;
   this.resolvedate = data.resolvedate;
   this.status = data.status;
   this.currentStudentID = data._id;

  }

  UpdateRecords()
  {
    let bodyData = {
      "eid":this.eid,
      "sid":this.sid,
      "complaintdate" : this.complaintdate,
      "desc" : this.desc,
      "resolvedate" : this.resolvedate,
      "status":this.status,
    };

    this.http.patch("http://localhost:3000/service/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Service details updated.")
        this.getAllStudent();

    });
  }
    setDelete(data: any) {
    this.http.delete("http://localhost:3000/service/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Consumer deleted.")
        //this.getAllStudent();

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
        alert("New service details added.")
         //this.getAllEmployee();
        this.eid = '';
        this.sid = '';
        this.complaintdate = '';
        this.desc = '';
        this.resolvedate  = '';
        this.status = '';
        this.getAllStudent();
    });
  }
  setval()
  {
      this.val=true;
  }
}
