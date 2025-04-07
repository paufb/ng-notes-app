import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NoteItem } from '../../types';

@Component({
  selector: 'app-note-form',
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css'
})
export class NoteFormComponent {
  @Output() createNoteItem = new EventEmitter<NoteItem>();
  isExpanded = false;
  noteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  onSubmit(formDirective: FormGroupDirective) {
    if (this.noteForm.valid) {
      const noteItem = { id: Date.now(), ...this.noteForm.value } as NoteItem;
      this.createNoteItem.emit(noteItem);
      this.isExpanded = false;
      formDirective.resetForm();
    }
  }
}
