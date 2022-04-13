import { NgModule,AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DentistryComponent } from './treatments/dentistry/dentistry.component';
import { CardiologyComponent } from './treatments/cardiology/cardiology.component';
import { OrthopaedicsComponent } from './treatments/orthopaedics/orthopaedics.component';
import { NeurologyComponent } from './treatments/neurology/neurology.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OncologyComponent } from './treatments/oncology/oncology.component';
import { EmergencyCasualtyComponent } from './patient-section/emergency-casualty/emergency-casualty.component';
import { AccommodationComponent } from './patient-section/accommodation/accommodation.component';
import { CanteenServiceComponent } from './patient-section/canteen-service/canteen-service.component';
import { AvailableGovSchemesComponent } from './patient-section/available-gov-schemes/available-gov-schemes.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookAppointmentComponent } from './navbarComponents/book-appointment/book-appointment.component';
import { AdminComponent } from './navbarComponents/admin/admin.component';
import { DoctorsSectionComponent } from './navbarComponents/doctors-section/doctors-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminMainComponent } from './admin-main/admin-main.component';


import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

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
  {path:'doctors', component:DoctorsSectionComponent},
  {path:'bookAppoitnment',component:BookAppointmentComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin-main',component:AdminMainComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
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
    ContactUsComponent,
    AdminComponent,
    DoctorsSectionComponent,
    AdminMainComponent
    
  ],
  imports: [BrowserModule, RouterModule.forRoot(routelist),FormsModule,ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule,MatTableModule,MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
