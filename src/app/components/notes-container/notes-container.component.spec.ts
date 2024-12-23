import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesContainerComponent } from './notes-container.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/services/http-service/http.service';
import { DataService } from 'src/app/services/data-service/data.service';
import { NotesService } from 'src/app/services/notes-service/notes.service';
import { AddNoteComponent } from '../add-note/add-note.component';
import { SearchPipe } from 'src/app/pipe/search.pipe';


describe('NotesContainerComponent', () => {
  let component: NotesContainerComponent;
  let fixture: ComponentFixture<NotesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MatIconModule,BrowserAnimationsModule,CommonModule,HttpClientModule],
      declarations: [NotesContainerComponent,AddNoteComponent,SearchPipe],
      providers:[HttpService,DataService,NotesService]
    });
    fixture = TestBed.createComponent(NotesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
