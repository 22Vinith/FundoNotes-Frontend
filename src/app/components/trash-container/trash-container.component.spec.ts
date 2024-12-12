import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashContainerComponent } from './trash-container.component';

describe('TrashContainerComponent', () => {
  let component: TrashContainerComponent;
  let fixture: ComponentFixture<TrashContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashContainerComponent]
    });
    fixture = TestBed.createComponent(TrashContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
