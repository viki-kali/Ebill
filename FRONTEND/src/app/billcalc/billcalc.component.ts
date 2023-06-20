import { Component } from '@angular/core';

@Component({
  selector: 'app-billcalc',
  templateUrl: './billcalc.component.html',
  styleUrls: ['./billcalc.component.scss']
})
export class BillcalcComponent {
  in!:number;
  inp:number=0;
  out:number=0;
  calculate()
  {
    this.inp=this.in;
    if(this.inp<=100)
    {
      this.out=0;
    }
    else if(this.inp>100 && this.inp<=200)
    {
      this.inp=this.inp-100;
      this.out=this.inp * 2.25;
    }
    else if(this.inp>200 && this.inp<=400)
    {
      this.inp=this.inp-200;
      this.out=this.inp * 4.50 +225;
    }
    else
    {
      this.inp=this.inp-400;
      this.out=this.inp * 6 +675;
    }
  }
}
