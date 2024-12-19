import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data-service/data.service';
import { NotesService } from 'src/app/services/notes-service/notes.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent {
trashList:any[]=[]
subscription!: Subscription
 searchQuery: string = ""
  constructor(private noteServices:NotesService, private dataService:DataService){}

  ngOnInit(){
    this.noteServices.getNotesApiCall().subscribe({
      next:(res:any)=>{
        console.log(res)
this.trashList=res.data.filter((note:any)=>
  note.isTrash===true
)
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

  handleTrashNotesList($event: { data: any, action: string }) {
    const { data, action } = $event; 
    console.log($event);
    if (action === 'delete-forever'|| action=='restore') {
      this.trashList = this.trashList.filter((note: any) => note._id !== data._id);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
}
}
