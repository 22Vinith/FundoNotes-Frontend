import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteCardComponent } from './note-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

describe('NoteCardComponent', () => {
  let component: NoteCardComponent;
  let fixture: ComponentFixture<NoteCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteCardComponent],
      imports: [HttpClientModule,MatDialogModule]
    });
    fixture = TestBed.createComponent(NoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
