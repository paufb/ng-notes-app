import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NoteItem } from '../../types';

@Component({
  selector: 'app-note-grid',
  templateUrl: './note-grid.component.html',
  styleUrl: './note-grid.component.css',
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class NoteGridComponent {
  @Input() noteItems: NoteItem[] = [];
}
