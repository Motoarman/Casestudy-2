import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPrajapatiComponent } from './doctor-prajapati.component';

describe('DoctorPrajapatiComponent', () => {
  let component: DoctorPrajapatiComponent;
  let fixture: ComponentFixture<DoctorPrajapatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPrajapatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPrajapatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
