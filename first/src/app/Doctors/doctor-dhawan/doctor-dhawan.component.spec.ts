import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDhawanComponent } from './doctor-dhawan.component';

describe('DoctorDhawanComponent', () => {
  let component: DoctorDhawanComponent;
  let fixture: ComponentFixture<DoctorDhawanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDhawanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDhawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
