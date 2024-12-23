import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderContainerComponent } from './header-container.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('HeaderContainerComponent', () => {
  let component: HeaderContainerComponent;
  let fixture: ComponentFixture<HeaderContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderContainerComponent],
      imports: [HttpClientModule,MatIconModule,MatButtonModule,MatMenuModule,NoopAnimationsModule,CommonModule,FormsModule]
    });
    fixture = TestBed.createComponent(HeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
