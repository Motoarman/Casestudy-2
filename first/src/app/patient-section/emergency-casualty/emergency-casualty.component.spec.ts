import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyCasualtyComponent } from './emergency-casualty.component';

describe('EmergencyCasualtyComponent', () => {
  let component: EmergencyCasualtyComponent;
  let fixture: ComponentFixture<EmergencyCasualtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyCasualtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyCasualtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
