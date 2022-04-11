import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAppForPrajapatiComponent } from './show-app-for-prajapati.component';

describe('ShowAppForPrajapatiComponent', () => {
  let component: ShowAppForPrajapatiComponent;
  let fixture: ComponentFixture<ShowAppForPrajapatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAppForPrajapatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAppForPrajapatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
