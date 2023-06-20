import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareitService } from "../shareit/shareit.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  search!:any;
  StudentArray : any[] = [];
  ReadingArray : any[] = [];
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

  constructor(private router: Router,private http: HttpClient,private k1:ShareitService )
  {
    this.getprofile();
    this.getreadings();
  }
  ngOnInit():void
  {
    this.search=this.k1.getkey();
  }
  getprofile() {

    this.http.get("http://localhost:3000/user/getAll")
    .subscribe((resultData: any)=>
    {

       this.StudentArray = resultData.data;

    });
  }
  getreadings() {

    this.http.get("http://localhost:3000/reading/getAll")
    .subscribe((resultData: any)=>
    {

       this.ReadingArray = resultData.data;

    });
  }
  hitpay(data: any)
  {
    if(data.status=="Paid")
    {
      alert("Bill already paid");
    }
    else
    {
      this.k1.setrid(data.rid);
      this.router.navigateByUrl('/addpayment');
    }
  }
}
