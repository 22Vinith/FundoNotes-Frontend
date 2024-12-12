import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveContainerComponent } from './archive-container.component';

describe('ArchiveContainerComponent', () => {
  let component: ArchiveContainerComponent;
  let fixture: ComponentFixture<ArchiveContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveContainerComponent]
    });
    fixture = TestBed.createComponent(ArchiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
