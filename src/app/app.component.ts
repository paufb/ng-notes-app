import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteGridComponent } from "./note-grid/note-grid.component";
import { NoteItem } from '../types';
import { NoteFormComponent } from "./note-form/note-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NoteGridComponent, NoteFormComponent],
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
