import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/notes-service/notes.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent {
trashList:any[]=[]

  constructor(private noteServices:NotesService){}

  ngOnInit(){
    this.noteServices.getNotesApiCall().subscribe({
      next:(res:any)=>{
        console.log(res)
this.trashList=res.data.filter((note:any)=>
  note.isTrash===true
)
      }
    })
  }
}
