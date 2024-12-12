import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService: HttpService) { }

  getAuthHeader() {
    const header = new HttpHeaders({ Authorization : `Bearer ${localStorage.getItem('authToken')}` || "" })
    return header
  }

  //get notes api
  getNotesApiCall():any {
    return this.httpService.getApiCall("http://localhost:3000/api/v1/notes/?page=1&limit=10", {headers: this.getAuthHeader()})
  }

  addNoteApiCall(data: any) {
    return this.httpService.postApiCall("http://localhost:3000/api/v1/notes", data, {headers: this.getAuthHeader()})
  }
  // //get archive api 
  // archiveApiCall():any{
  //   return this.httpService.putApiCall("http://localhost:3000/api/v1/notes/?page=1&limit=10",{headers: this.getAuthHeader()})
  // }

  // //get trash api
  // trashApiCall():any{
  //   return this.httpService.putApiCall("http://localhost:3000/api/v1/notes/:id/trash",{headers: this.getAuthHeader()})
  // }

}

