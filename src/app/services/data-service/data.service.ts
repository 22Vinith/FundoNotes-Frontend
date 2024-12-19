import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private searchQuery = new BehaviorSubject('');//takes the data from this.searchQuery.next(val) and stores and update the query and emits
  currSearchQuery = this.searchQuery.asObservable(); //this is a observer which executes when some component keeps listening with subscribe (subcribe bcz it is a observer)

  constructor() { }

  updateSearchQuery(val: string) {
    this.searchQuery.next(val) //it updates the string which is empty ie '' 
  }
}
