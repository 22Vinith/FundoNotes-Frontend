import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  loginApiCall(data: any) {
    return this.httpService.postApiCall("http://localhost:3000/api/v1/users/login", data)
  }

  registerApiCall(data:any){
    return this.httpService.postApiCall("http://localhost:3000/api/v1/users",data)
  }
}
