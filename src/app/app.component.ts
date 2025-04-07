import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteGridComponent } from './note-grid/note-grid.component';
import { NoteItem } from '../types';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, NoteGridComponent, NoteFormComponent],
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

  deleteAllNoteItems() {
    this.noteItems = [];
    localStorage.removeItem(this.localStorageItemKey);
  }

  generateSamples() {
    const sampleTitles = [
      "Meeting with Marketing",
      "Daily Journal",
      "Project Roadmap",
      "Book Summary",
      "Workout Plan",
      "Recipe Idea",
      "Coding Notes",
      "Travel Wishlist",
      "Budget Overview",
      "Mindfulness Practice"
    ];
    const sampleDescriptions = [
      "Discussed Q2 campaign strategies and content calendar.",
      "Today I felt super productive and completed all my goals!",
      "Outline of major features, milestones, and deadlines.",
      "Key takeaways from 'Atomic Habits' by James Clear.",
      "Plan for strength training and cardio split.",
      "Idea for a spicy lentil soup with coconut milk.",
      "Notes on TypeScript utility types and generics.",
      "Places I want to visit this year: Japan, Iceland, Peru.",
      "Breakdown of monthly expenses and savings goals.",
      "Morning routine and breathing exercises to reduce stress."
    ];
    const getRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
    for (let i = 0; i < 4; i++) {
      const noteItem: NoteItem = {
        id: Date.now(),
        title: getRandom(sampleTitles),
        description: getRandom(sampleDescriptions)
      };
      this.noteItems.push(noteItem);
    }
    this.saveNoteItems();
  }
}
