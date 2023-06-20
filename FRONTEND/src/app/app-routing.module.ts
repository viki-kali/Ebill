import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AddconsumerComponent } from './addconsumer/addconsumer.component';
import { EditconsumerComponent } from './editconsumer/editconsumer.component';

import { AddreadingComponent } from './addreading/addreading.component';
import { EditreadingComponent } from './editreading/editreading.component';

import { AddDisconnectionComponent } from './add-disconnection/add-disconnection.component';
import { DisconnectionComponent } from './disconnection/disconnection.component';

import { ComplaintComponent } from './complaint/complaint.component';
import { ViewcomplaintComponent } from './viewcomplaint/viewcomplaint.component';

import { AddfeedbackComponent } from './addfeedback/addfeedback.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';

import { PayComponent } from './pay/pay.component';
import { ViewpaymentComponent } from './viewpayment/viewpayment.component';
//
import { ProfileComponent } from './profile/profile.component';
import { BillcalcComponent } from './billcalc/billcalc.component';
import { TariffComponent } from './tariff/tariff.component';
import { RegionComponent } from './region/region.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'addconsumer', component:AddconsumerComponent
  },
  {
    path:'editconsumer', component:EditconsumerComponent
  },
  {
    path:'addreading', component:AddreadingComponent
  },
  {
    path:'editreading', component:EditreadingComponent
  },
  {
    path:'adddisconnection',component:AddDisconnectionComponent
  },
  {
    path:'editdisconnection',component:DisconnectionComponent
  },
  {
    path:'addcomplaint', component:ComplaintComponent
  },
  {
    path:'editcomplaint',component:ViewcomplaintComponent
  },
  {
    path:'addfeedback', component:AddfeedbackComponent
  },
  {
    path:'editfeedback',component:ViewfeedbackComponent
  },
  {
    path:'addpayment',component:PayComponent
  },
  {
    path:'editpayment',component:ViewpaymentComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'tariff',component:TariffComponent
  },
  {
    path:'bill',component:BillcalcComponent
  },
  {
    path:'region', component:RegionComponent
  },
  {
    path:'help', component:HelpdeskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
