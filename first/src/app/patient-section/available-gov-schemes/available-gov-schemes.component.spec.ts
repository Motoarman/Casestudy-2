import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableGovSchemesComponent } from './available-gov-schemes.component';

describe('AvailableGovSchemesComponent', () => {
  let component: AvailableGovSchemesComponent;
  let fixture: ComponentFixture<AvailableGovSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableGovSchemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableGovSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
