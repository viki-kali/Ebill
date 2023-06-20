import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgOptimizedImage } from '@angular/common';
//
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';

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
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { BillcalcComponent } from './billcalc/billcalc.component';
import { TariffComponent } from './tariff/tariff.component';
import { RegionComponent } from './region/region.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    BillcalcComponent,
    PayComponent,
    MenuComponent,
    TariffComponent,
    MenuadminComponent,
    RegionComponent,
    HelpdeskComponent,
    AddconsumerComponent,
    EditconsumerComponent,
    HomeComponent,
    ComplaintComponent,
    DisconnectionComponent,
    ViewcomplaintComponent,
    AddreadingComponent,
    EditreadingComponent,
    AddDisconnectionComponent,
    ViewpaymentComponent,
    AddfeedbackComponent,
    ViewfeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
