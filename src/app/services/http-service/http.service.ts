import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getNotesApiCall: any;

  constructor(private httpClient: HttpClient) { }

  getApiCall(endpoint: string, options: any = {}) {
    return this.httpClient.get(endpoint, options)
  }

  postApiCall(endpoint: string, data: any, options: any = {}) {
    return this.httpClient.post(endpoint, data, options)
  }

  putApiCall(endpoint:string,data: any,options:any={}){
    return this.httpClient.put(endpoint,data,options)
  }
  deleteApiCall(endpoint:string, options:any={}){
    return this.httpClient.delete(endpoint,options)
  }

}