import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http-service/http.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; //no need to initailize by using !
  submitted: boolean = false

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get loginControls() { return this.loginForm.controls } //user needs data so why we declared using get

  handleLogin() {
    this.submitted = true
    console.log(this.loginForm.controls); 
    const {email, password} = this.loginForm.value

    if(this.loginForm.status == "INVALID") return

    //api call
    this.userService.loginApiCall({email, password}).subscribe({next: (res) => {
      console.log(res); 
      localStorage.setItem("authToken", "")  
    }, error: (err) => {
      console.log(err);
    }})
    // this.router.navigate(["/dashboard"])
  }

}
