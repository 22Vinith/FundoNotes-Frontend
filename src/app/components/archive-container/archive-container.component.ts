import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DataService } from 'src/app/services/data-service/data.service';
import { NotesService } from 'src/app/services/notes-service/notes.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent {

archiveList:any[]=[]
searchQuery: string = ""
subscription!: Subscription

constructor( private noteServices:  NotesService,private dataService:DataService){

}

ngOnInit(){
  this.noteServices.getNotesApiCall().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.archiveList=res.data.filter((note:any)=>note.isArchive===true && note.isTrash===false);
    },
    error:(err:any)=>{
      console.log(err);
    }
  })

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


handleArchiveNotesList($event: { data: any, action: string }) {
  const { data, action } = $event; 
  console.log($event);
  if (action === 'unarchive'||action=='trash') {
    this.archiveList = this.archiveList.filter((note: any) => note._id !== data._id);
  }
  else if(action == "color"){
    this.archiveList = this.archiveList.map((note) => {
      if(note._id == data._id) return data
      return note
    })
  }
} 

ngOnDestroy() {
  this.subscription.unsubscribe()
}

}
