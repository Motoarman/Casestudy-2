import { NgModule,AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { DentistryComponent } from './dentistry/dentistry.component';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { OrthopaedicsComponent } from './orthopaedics/orthopaedics.component';
import { NeurologyComponent } from './neurology/neurology.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OncologyComponent } from './oncology/oncology.component';
import { EmergencyCasualtyComponent } from './patient-section/emergency-casualty/emergency-casualty.component';
import { AccommodationComponent } from './patient-section/accommodation/accommodation.component';
import { CanteenServiceComponent } from './patient-section/canteen-service/canteen-service.component';
import { AvailableGovSchemesComponent } from './patient-section/available-gov-schemes/available-gov-schemes.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { DoctorPrajapatiComponent } from './Doctors/doctor-prajapati/doctor-prajapati.component';
import { DoctorJadhavComponent } from './Doctors/doctor-jadhav/doctor-jadhav.component';
import { DoctorShramaComponent } from './Doctors/doctor-shrama/doctor-shrama.component';
import { DoctorDhawanComponent } from './Doctors/doctor-dhawan/doctor-dhawan.component';
import { DoctorPatilComponent } from './Doctors/doctor-patil/doctor-patil.component';
import { ShowAppForPrajapatiComponent } from './Doctors/doctor-prajapati/show-app-for-prajapati/show-app-for-prajapati.component';




var routelist: Routes = [

  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'dentistry', component: DentistryComponent },
  { path: 'cardiology', component: CardiologyComponent },
  { path: 'oncology', component:OncologyComponent},
  { path: 'orthopaedics', component: OrthopaedicsComponent },
  { path: 'neurology', component: NeurologyComponent },
  {path:'accommodation', component:AccommodationComponent},
  {path:'available-gov-schemes', component:AvailableGovSchemesComponent},
  {path:'canteen-service', component:CanteenServiceComponent},
  {path:'emergency-casaulty', component:EmergencyCasualtyComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'drPrajapati',component:DoctorPrajapatiComponent},
  {path:'drJadhav',component:DoctorJadhavComponent},
  {path:'drSharma',component:DoctorShramaComponent},
  {path:'drPatil',component:DoctorPatilComponent},
  {path:'drDhawan',component:DoctorDhawanComponent},
  {path:'showAppPraja',component:ShowAppForPrajapatiComponent},
  {path:'bookAppoitnment',component:BookAppointmentComponent}






];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    DentistryComponent,
    OrthopaedicsComponent,
    NeurologyComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    OncologyComponent,
    EmergencyCasualtyComponent,
    AccommodationComponent,
    CanteenServiceComponent,
    AvailableGovSchemesComponent,
    HomepageComponent,
    CardiologyComponent,
    BookAppointmentComponent,
    DoctorPrajapatiComponent,
    DoctorJadhavComponent,
    DoctorShramaComponent,
    DoctorDhawanComponent,
    DoctorPatilComponent,
    ShowAppForPrajapatiComponent




  ],
  imports: [BrowserModule, RouterModule.forRoot(routelist),FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
