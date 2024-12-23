import { Component, EventEmitter, Inject, Optional, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NotesService } from 'src/app/services/notes-service/notes.service';
import { REMINDER_ICON, COLLABRATOR_ICON, COLOR_PALATTE_ICON, IMG_ICON, ARCHIVE_ICON, MORE_ICON, DELETE_FOREVER_ICON, RESTORE_ICON, UNARCHIVE_ICON, LIST_VIEW_ICON, BRUSH_ICON, UNDO_ICON, REDO_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {
  expandAddNote : boolean = false
  title: string = ""
  description: string = ""
  color: string = "#ffffff"
  isArchive : boolean = false
  @Output() updateList = new EventEmitter<{data: any, action: string}>()

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private notesService: NotesService,@Optional() @Inject(MAT_DIALOG_DATA) public data: any, @Optional() public dialogRef: MatDialogRef<AddNoteComponent>) {
   console.log(data);
    if(data) {
      const {expandNote, noteDetails} = data
      this.expandAddNote = expandNote
      this.title = noteDetails.title
      this.description = noteDetails.description
      this.color = noteDetails.color
      
    }
    iconRegistry.addSvgIconLiteral('img-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
    iconRegistry.addSvgIconLiteral('list-view-icon', sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON));
    iconRegistry.addSvgIconLiteral('brush-icon', sanitizer.bypassSecurityTrustHtml(BRUSH_ICON));
    iconRegistry.addSvgIconLiteral('remainder-icon', sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral('collaborator-icon', sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON));
    iconRegistry.addSvgIconLiteral('colorpallete-icon', sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON));
    iconRegistry.addSvgIconLiteral('remainder-icon', sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON));
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON));
    iconRegistry.addSvgIconLiteral('undo-icon', sanitizer.bypassSecurityTrustHtml(UNDO_ICON));
    iconRegistry.addSvgIconLiteral('redo-icon', sanitizer.bypassSecurityTrustHtml(REDO_ICON));
  }

  handleAddNote(action: string){
    this.expandAddNote = !this.expandAddNote; // Toggles the note state
    //action add then call api
    if(this.data) action = "edit"
    
    if(action == "add") {
      console.log(this.title, this.description,this.isArchive);
      this.notesService.addNoteApiCall({title: this.title, description: this.description, color: this.color,isArchive:this.isArchive}).subscribe({
        next: (res: any) => {
          console.log(res);
          this.updateList.emit({data: res.data, action: this.isArchive ? "archive" : "add"})
        },
        error: (err: any) => {
          console.log(err); 
        }
      })
    }

    else if(action == "edit") {
      //call update api
      const {noteDetails} = this.data
      this.notesService.updateApiCall({...noteDetails, title: this.title, description: this.description, color: this.color,isArchive:this.isArchive}).subscribe({
        next: (res: any) => {
          console.log(res);
          this.updateList.emit({data: res.data, action: "edit"})
        },
        error: (err: any) => {
          console.log(err); 
        }
      })
      
      this.dialogRef.close({...noteDetails, title: this.title, description: this.description})
    }

  }

  handleColor(color:string){
    this.color=color
  }
  handleArchive(archive:boolean){
    this.isArchive=archive
  }
}
