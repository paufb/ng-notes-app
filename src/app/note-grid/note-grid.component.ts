import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDrag, CdkDragHandle, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { NoteItem } from '../../types';

@Component({
  selector: 'app-note-grid',
  templateUrl: './note-grid.component.html',
  styleUrl: './note-grid.component.css',
  imports: [MatButtonModule, CdkDrag, CdkDragHandle, CdkDropList]
})
export class NoteGridComponent {
  @Input() noteItems: NoteItem[] = [];
  @Output() reorderNoteItems = new EventEmitter<NoteItem[]>();

  drop(event: CdkDragDrop<NoteItem[]>) {
    moveItemInArray(this.noteItems, event.previousIndex, event.currentIndex);
    this.reorderNoteItems.emit(this.noteItems);
  }
}
