import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveContainerComponent } from './archive-container.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from 'src/app/services/http-service/http.service';
import { DataService } from 'src/app/services/data-service/data.service';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NotesService } from 'src/app/services/notes-service/notes.service';
import { SearchPipe } from 'src/app/pipe/search.pipe';

describe('ArchiveContainerComponent', () => {
  let component: ArchiveContainerComponent;
  let fixture: ComponentFixture<ArchiveContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MatIconModule,BrowserAnimationsModule,CommonModule,HttpClientModule],
      declarations: [ArchiveContainerComponent,SearchPipe],
      providers:[HttpService,DataService,NotesService]
    });
    fixture = TestBed.createComponent(ArchiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
