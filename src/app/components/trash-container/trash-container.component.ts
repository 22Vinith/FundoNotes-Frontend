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

  handleTrashNotesList($event: { data: any, action: string }) {
    const { data, action } = $event; 
    console.log($event);
    if (action === 'delete-forever') {
      this.trashList = this.trashList.filter((note: any) => note._id !== data._id);
    }
    else if(action=='restore'){
      this.trashList = this.trashList.filter((note: any) => note._id !== data._id);
    }
  }
}
