import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenServiceComponent } from './canteen-service.component';

describe('CanteenServiceComponent', () => {
  let component: CanteenServiceComponent;
  let fixture: ComponentFixture<CanteenServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanteenServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanteenServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
