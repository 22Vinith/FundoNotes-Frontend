import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  postApiCall(endpoint: string, data: any, options: any = {}) {
    return this.httpClient.post(endpoint, data, options)
  }

}
