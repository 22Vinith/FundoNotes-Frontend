import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() updateList = new EventEmitter<{data: any, action: string}>()

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private notesService: NotesService) {
   
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
    if(action == "add") {
      console.log(this.title, this.description);
      this.notesService.addNoteApiCall({title: this.title, description: this.description}).subscribe({
        next: (res: any) => {
          console.log(res);
          this.updateList.emit({data: res.data, action: "add"})
        },
        error: (err: any) => {
          console.log(err); 
        }
      })
    }  
  }
}
