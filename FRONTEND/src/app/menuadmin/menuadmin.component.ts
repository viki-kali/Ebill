import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LogoutService } from '../services/logout.service';
@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.scss']
})
export class MenuadminComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

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
  constructor(private router: Router,private breakpointObserver: BreakpointObserver,private http: HttpClient,private logout:LogoutService)
  {
    this.getAllStudent();
      var a = this.logout.getvalidate;
      if(!a){
      this.router.navigateByUrl('/login');
      }
  }
  getAllStudent() {

    this.http.get("http://localhost:3000/user/getAll")
    .subscribe((resultData: any)=>
    {

       this.StudentArray = resultData.data;

    });
  }
    logout1(){
    this.logout.setvalidate("");
    this.router.navigateByUrl('/');
  }

}
