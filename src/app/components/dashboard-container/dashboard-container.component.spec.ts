import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContainerComponent } from './dashboard-container.component';
import { HeaderContainerComponent } from '../header-container/header-container.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

describe('DashboardContainerComponent', () => {
  let component: DashboardContainerComponent;
  let fixture: ComponentFixture<DashboardContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,  
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        NoopAnimationsModule,
        FormsModule,
        MatSidenavModule,
        RouterModule  
      ],
      declarations: [DashboardContainerComponent,HeaderContainerComponent]
    });
    fixture = TestBed.createComponent(DashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
