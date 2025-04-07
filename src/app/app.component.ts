import { Component } from '@angular/core';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteGridComponent } from './note-grid/note-grid.component';
import { NoteItem } from '../types';

@Component({
  selector: 'app-root',
  imports: [NoteGridComponent, NoteFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My notes ✍️';
  localStorageItemKey = 'noteItems';
  noteItems: NoteItem[] = [];

  ngOnInit() {
    this.loadNoteItems();
  }

  createNoteItem(noteItem: NoteItem) {
    this.noteItems.push(noteItem);
    this.saveNoteItems();
  }

  saveNoteItems() {
    localStorage.setItem(this.localStorageItemKey, JSON.stringify(this.noteItems));
  }

  loadNoteItems() {
    const saved = localStorage.getItem(this.localStorageItemKey);
    if (saved)
      this.noteItems = JSON.parse(saved);
  }
}
