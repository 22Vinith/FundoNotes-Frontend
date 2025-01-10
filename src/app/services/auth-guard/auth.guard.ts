import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if(localStorage.getItem('authToken')) {
      return true;
    } else {
    
      this.router.navigate(['']);
      return false
    }
  }
}
