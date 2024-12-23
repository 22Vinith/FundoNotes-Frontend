// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [LoginComponent]
//     });
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from 'src/app/services/user-service/user.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    userService = jasmine.createSpyObj('UserService', ['loginApiCall']);
    router = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: UserService, useValue: userService },
        { provide: Router, useValue: router }
      ]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "Email is required" error when email is empty', () => {
    const emailControl = component.loginForm.controls['email'];
    emailControl.setValue('');
    emailControl.markAsTouched();
    component.handleLogin();
    fixture.detectChanges();
    expect(emailControl.errors?.['required']).toBeTruthy();
    const compiled = fixture.nativeElement;
    const errorElement = compiled.querySelector('mat-error');
    expect(errorElement.textContent).toContain('Email is required');
  });

  it('should show "Password is required" for empty password field', () => {
    const passwordControl = component.loginControls['password'];
    passwordControl.setValue('');
    passwordControl.markAsTouched();
    component.handleLogin();
    fixture.detectChanges();
    expect(passwordControl.errors?.['required']).toBeTruthy();
    const compiled = fixture.nativeElement;
    const errorElement = compiled.querySelector('mat-error');
    expect(errorElement.textContent).toContain('password is required');
  });

  it('should show "Invalid email format" for invalid email format', () => {
    const emailControl = component.loginControls['email'];
    emailControl.setValue('acisdhcfi');
    emailControl.markAsTouched();
    component.handleLogin();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const errorElement = compiled.querySelector('mat-error');
    expect(errorElement.textContent).toContain('Incorrect Email Format');
  });



  it('should navigate to dashboard on successful login', () => {
    const mockResponse: any = { data: { token: 'bdfcufcf' } };
    userService.loginApiCall.and.returnValue(of(mockResponse));
    component.loginControls['email'].setValue('aa@gmail.com');
    component.loginControls['password'].setValue('Avinith123@');
    component.handleLogin();
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith( [  '/dashboard/notes'  ]);
  });

});