import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-service/data.service';
import { NotesService } from 'src/app/services/notes-service/notes.service';


@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit, OnDestroy {
  notesList: any [] = []
  searchQuery: string = ""
  subscription!: Subscription
  
  constructor(private noteService:NotesService, private dataService: DataService) {}

  ngOnInit() {
    this.noteService.getNotesApiCall().subscribe({
      next: (res: any) => {
        console.log('API Response:', res.data);
        this.notesList = res.data.filter((note: any) => !note.isArchive && !note.isTrash); // Filter non-archived notes and trash notes
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    this.subscription = this.dataService.currSearchQuery.subscribe({ 
      next: (res: string) => {
        this.searchQuery = res
        console.log(res);
        
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

//in the above subscription 1st line it access the data service currSearchQuery(bcz currSearchQuery in the data service
// always keeps emiting those who access it and listening to it(means subscribe )) then the updated string value from the
// data service is assigned to this 'this.searchQuery' in this file and then it is passed to the search pipe  

  handleNotesList($event: {data: any, action: string}) {
    console.log($event);
    const {data, action} = $event
    if(action == "add")
      this.notesList = [data, ...this.notesList]
    else if(action == "trash" || action == "archive"){
      this.notesList = this.notesList.filter((note: any) => note._id != data._id)
    }
    else if(action == "color" || action == "edit"){
      this.notesList = this.notesList.map((note) => {
        if(note._id == data._id) return data
        return note
      })
    }
  }

  ngOnDestroy() {
      this.subscription.unsubscribe()
  }
}

//ngOnDestroy is used to unsubscribe it 
//all these are used in ngOnInit bcz it need to take sudden action based on the search or updated string 
//And the pipe is called  in the template of this file bcz it is the reason for creating the note-card