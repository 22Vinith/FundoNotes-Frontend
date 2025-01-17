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

  getEmailFromToken(): string | null {
    const token = localStorage.getItem('authToken');
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decode the payload
      return payload.email || null; // Extract the email
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  //get notes api
  getNotesApiCall():any {
    return this.httpService.getApiCall("http://localhost:3000/api/v1/notes/?page=1&limit=1000", {headers: this.getAuthHeader()})
  }

  addNoteApiCall(data: any) {
    return this.httpService.postApiCall("http://localhost:3000/api/v1/notes", data, {headers: this.getAuthHeader()})
  }
  //get archive api 
  archiveApiCall(data:any){
    return this.httpService.putApiCall(`http://localhost:3000/api/v1/notes/${data._id}/archive`,data,{headers: this.getAuthHeader()})
  }

  //get trash api
  trashApiCall(data:any){
    return this.httpService.putApiCall(`http://localhost:3000/api/v1/notes/${data._id}/trash`,data,{headers: this.getAuthHeader()})
  }

  //delete-permanently
  deletePermanently(data:any){
return this.httpService.deleteApiCall(`http://localhost:3000/api/v1/notes/${data._id}/delete`,{headers: this.getAuthHeader()})
  }

  updateApiCall(data:any){
    return this.httpService.putApiCall(`http://localhost:3000/api/v1/notes/${data._id}/update`,data,{headers: this.getAuthHeader()})
  }
}

