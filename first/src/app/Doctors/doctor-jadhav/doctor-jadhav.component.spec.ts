import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorJadhavComponent } from './doctor-jadhav.component';

describe('DoctorJadhavComponent', () => {
  let component: DoctorJadhavComponent;
  let fixture: ComponentFixture<DoctorJadhavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorJadhavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorJadhavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
