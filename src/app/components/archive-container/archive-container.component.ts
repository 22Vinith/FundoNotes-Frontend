import { Component } from '@angular/core';
import { NotesService } from 'src/app/services/notes-service/notes.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent {

archiveList:any[]=[]

constructor( private noteServices:  NotesService){

}

ngOnInit(){
  this.noteServices.getNotesApiCall().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.archiveList=res.data.filter((note:any)=>note.isArchive===true&& note.isTrash===false);
    },
    error:(err:any)=>{
      console.log(err);
    }
  })
}

}
