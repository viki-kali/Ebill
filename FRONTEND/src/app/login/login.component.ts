import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LogoutService} from '../services/logout.service'
import { ShareitService } from "../shareit/shareit.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  eid: string = '';
  password: string = '';
  isLogin: boolean = true;
  erroMessage: string = "";
  constructor(private router: Router,private http: HttpClient,private us:LogoutService,private k1:ShareitService)
  {
  }


  login() {
    this.k1.setkey(this.eid);
    let bodyData = {
      eid: this.eid,
      password: this.password,
    };

        this.http.post("http://127.0.0.1:3000/user/login", bodyData).subscribe(  (resultData: any) => {
        if (resultData.status)
        {
          if(this.eid=="admin")
          {
            alert("Admin logged IN.");
            this.us.setvalidate(this.eid);
            this.router.navigateByUrl('/addconsumer');
          }
          else
          {
            alert("Consumer logged IN.");
            this.us.setvalidate(this.eid);
            this.router.navigateByUrl('/profile');
          }
        }
        else
        {
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });
    }

}
