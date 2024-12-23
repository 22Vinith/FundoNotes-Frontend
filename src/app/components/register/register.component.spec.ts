import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegisterComponent } from './register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('RegistrationComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mockUserService:jasmine.SpyObj<UserService>;
  let mockRouter:jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockUserService=jasmine.createSpyObj('UserService',['registerApiCall']);
    mockRouter=jasmine.createSpyObj('Router',['navigate']);
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports:[HttpClientTestingModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      providers:[
      {provide:UserService,useValue:mockUserService},
      {provide:Router,useValue:mockRouter}
        
      ]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "Email is required" when name is empty',()=>{
    const emailControl=component.signupControls['email'];
    emailControl.setValue('');
    emailControl.markAsTouched();
    component.handleRegister();
    fixture.detectChanges();
    expect(emailControl.errors?.['required']).toBeTruthy();
    const compiled=fixture.nativeElement;
    const errorElement=compiled.querySelector('mat-error');
    expect(errorElement.textContent).toContain('Email is required');
  });



  it('should show "Password is required" for empty password field', () => {
    const passwordControl = component.signupControls['password'];
    passwordControl.setValue('');
    passwordControl.markAsTouched();
    component.handleRegister();
    fixture.detectChanges();
    expect(passwordControl.errors?.['required']).toBeTruthy();
    const compiled = fixture.nativeElement;
    const errorElement = compiled.querySelector('mat-error');
    expect(errorElement.textContent).toContain('password is required');
  });


  it('should navigate to login page after successful login',()=>{
    component.registerForm.setValue({
      firstName:'aa',
      lastName:'vinith',
      email:'aa@gmail.com',
      password:'Avinith123@', 
      confirmPassword:'Avinith123@'
    });
    const mockResponse: any = { data: {message: 'Registration successful' } };
    mockUserService.registerApiCall.and.returnValue(of(mockResponse));
    component.handleRegister();
    fixture.detectChanges();
  
    // tick(2000);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['']);
    
  });
  
  })
