import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletDialogueComponent } from './delet-dialogue.component';

describe('DeletDialogueComponent', () => {
  let component: DeletDialogueComponent;
  let fixture: ComponentFixture<DeletDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
