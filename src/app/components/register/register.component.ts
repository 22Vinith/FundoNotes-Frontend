import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup; //no need to initailize if we use (!)
  submitted: boolean = false
    
  constructor( private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  get signupControls() {return this.registerForm.controls}

  get registerControls() { return this.registerForm.controls }

  handleRegister() {
    this.submitted = true
    console.log(this.registerForm.controls); 
    const {firstName,lastName,email,password} = this.registerForm.value

    if(this.registerForm.status == "INVALID") return

       //api call
       this.userService.registerApiCall({firstname: firstName,lastname: lastName,email,password}).subscribe({next: (res) => {
        console.log(res); 
        localStorage.setItem("authToken", "")  
        this.router.navigate(['']);
      }, error: (err) => {
        console.log(err);
      }})

  }

}
