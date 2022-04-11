import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorShramaComponent } from './doctor-shrama.component';

describe('DoctorShramaComponent', () => {
  let component: DoctorShramaComponent;
  let fixture: ComponentFixture<DoctorShramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorShramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorShramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
