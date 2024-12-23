import { TestBed } from '@angular/core/testing';

import { NotesService } from './notes.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../http-service/http.service';

describe('NotesService', () => {
  let service: NotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],  // Ensure HttpClientModule is imported
      providers: [HttpService] 
    });
    service = TestBed.inject(NotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
