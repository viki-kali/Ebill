import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-editconsumer',
  templateUrl: './editconsumer.component.html',
  styleUrls: ['./editconsumer.component.scss']
})
export class EditconsumerComponent {

  val:boolean=false;
  search!:any;
  StudentArray : any[] = [];
  currentStudentID = "";
  eid:string ="";
  password:string ="";
  name: string ="";
  address: string ="";
  phone: string ="";
  readingdate: string ="";
  duedate: string ="";
  units: string ="";
  bill: string ="";
  status: string ="";
  r1!:any;
  r2!:any;
  constructor(private http: HttpClient )
  {
    this.getAllStudent();
  }
  getAllStudent() {

    this.http.get("http://localhost:3000/user/getAll")
    .subscribe((resultData: any)=>
    {

       this.StudentArray = resultData.data;

    });


  }

  setUpdate(data: any)
  {
   this.eid = data.eid;
   this.password = data.password;
   this.name = data.name;
   this.address = data.address;
   this.phone = data.phone;
   this.readingdate = data.readingdate;
   this.duedate = data.duegdate;
   this.units = data.units;
   this.bill = data.bill;
   this.status = data.status;
   this.currentStudentID = data._id;

  }

  UpdateRecords()
  {
    let bodyData = {
      "eid":this.eid,
      "password":this.password,
      "name" : this.name,
      "address" : this.address,
      "phone" : this.phone,
      "readingdate":this.readingdate,
      "duedate":this.duedate,
      "units":this.units,
      "bill":this.bill,
      "status":this.status,
    };

    this.http.patch("http://localhost:3000/user/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Consumer details updated.")
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
    this.http.delete("http://localhost:3000/user/delete"+ "/"+ data._id).subscribe((resultData: any)=>
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
      "password":this.password,
      "name" : this.name,
      "address" : this.address,
      "phone" : this.phone,
      "readingdate":this.readingdate,
      "duedate":this.duedate,
      "units":this.units,
      "bill":this.bill,
      "status":this.status,

  };
    this.http.post("http://localhost:3000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("New consumer details Successfully added.")
         //this.getAllEmployee();
        this.eid = '';
        this.password = '';
        this.name = '';
        this.address = '';
        this.phone  = '';
        this.readingdate = '';
        this.duedate = '';
        this.units = '';
        this.bill = '';
        this.status = '';
        this.getAllStudent();
    });
  }
  setval()
  {
      this.val=true;
  }
}
