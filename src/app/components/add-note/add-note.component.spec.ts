import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoteComponent } from './add-note.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/services/http-service/http.service';
import { DataService } from 'src/app/services/data-service/data.service';
import { NotesService } from 'src/app/services/notes-service/notes.service';

describe('AddNoteComponent', () => {
  let component: AddNoteComponent;
  let fixture: ComponentFixture<AddNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MatIconModule,BrowserAnimationsModule,CommonModule,HttpClientModule],
      declarations: [AddNoteComponent],
      providers:[HttpService,DataService,NotesService]
    });
    fixture = TestBed.createComponent(AddNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
