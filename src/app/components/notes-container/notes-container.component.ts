import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes-service/notes.service';


@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {
  notesList: any [] = []
  
  constructor(private noteService:NotesService) {}


  ngOnInit() {
    // apicall()
    this.noteService.getNotesApiCall().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.notesList = res.data
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  handleNotesList($event: {data: any, action: string}) {
    console.log($event);
    const {data, action} = $event
    if(action == "add")
      this.notesList = [$event, ...this.notesList]
    else if(action == "trash" || action == "archive")
      this.notesList = this.notesList.filter((note: any) => note._id != data._id)
  }
}
