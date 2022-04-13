import { Time } from "@angular/common";
import { Timestamp } from "rxjs";


export interface Appointment{
    id:number;
    firstName:string;
    lastName:string;
    phoneNo:number;
    emailId:string;
    age:number;
    gender:string;
    medicalComplaint:string;
    selectedDate:Date;
    selectedSlot:Time;
    visitingStatus:string;
    doctorId:number;
    patientId:number;
    


}
