import { Time } from "@angular/common";
import { Timestamp } from "rxjs";


export interface Appointment{
    id:number;
    first_name:string;
    last_name:string;
    phone_no:number;
    email_id:string;
    age:number;
    gender:string;
    medical_complaint:string;
    selected_date:Date;
    selected_slot:Time;
    visiting_status:string;
    doctor_id:number;
    patient_id:number;


}
