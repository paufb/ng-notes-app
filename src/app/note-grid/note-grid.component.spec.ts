import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteGridComponent } from './note-grid.component';

describe('GridComponent', () => {
  let component: NoteGridComponent;
  let fixture: ComponentFixture<NoteGridComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
