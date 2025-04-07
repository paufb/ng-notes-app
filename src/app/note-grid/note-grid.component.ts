import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDrag, CdkDragHandle, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NoteItem } from '../../types';

@Component({
  selector: 'app-note-grid',
  templateUrl: './note-grid.component.html',
  styleUrl: './note-grid.component.css',
  imports: [MatButtonModule, MatIconModule, MatMenuModule, CdkDrag, CdkDragHandle, CdkDropList]
})
export class NoteGridComponent {
  @Input() noteItems: NoteItem[] = [];
  @Output() deleteNoteItem = new EventEmitter<number>();
  @Output() reorderNoteItems = new EventEmitter<NoteItem[]>();

  delete(noteItemId: number) {
    console.log(`About to delete ${noteItemId}`);
    this.deleteNoteItem.emit(noteItemId);
  }

  drop(event: CdkDragDrop<NoteItem[]>) {
    moveItemInArray(this.noteItems, event.previousIndex, event.currentIndex);
    this.reorderNoteItems.emit(this.noteItems);
  }
}
