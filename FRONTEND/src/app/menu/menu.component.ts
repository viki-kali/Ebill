import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LogoutService } from '../services/logout.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private logout:LogoutService,private router: Router,private breakpointObserver: BreakpointObserver)
  {
    var a = this.logout.getvalidate;
    if(!a){
    this.router.navigateByUrl('/login');
    }
  }
  logout1(){
    this.logout.setvalidate("");
    this.router.navigateByUrl('/');
  }
}
