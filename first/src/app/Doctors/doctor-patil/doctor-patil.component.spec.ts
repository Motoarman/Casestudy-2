import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPatilComponent } from './doctor-patil.component';

describe('DoctorPatilComponent', () => {
  let component: DoctorPatilComponent;
  let fixture: ComponentFixture<DoctorPatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPatilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
