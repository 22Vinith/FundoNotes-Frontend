import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ARCHIVE_ICON, EDIT_ICON, NOTE_ICON, REMINDER_ICON, TRASH_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  host: {
    class: 'app-dashboard-cnt'
  }
})
export class DashboardContainerComponent {
  drawerState: boolean = false
constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,private router:Router){
  iconRegistry.addSvgIconLiteral('reminder-icon', sanitizer.bypassSecurityTrustHtml(REMINDER_ICON));
  iconRegistry.addSvgIconLiteral('note-icon', sanitizer.bypassSecurityTrustHtml(NOTE_ICON));
  iconRegistry.addSvgIconLiteral('edit-icon', sanitizer.bypassSecurityTrustHtml(EDIT_ICON));
  iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON));
  iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON));
 }

ngOnIt(){}

handleDrawerState(event:any) {
  this.drawerState=!this.drawerState
}



handleNavigation(action:string){
  if(action=='notes'){
    this.router.navigate(["/dashboard/notes"]) ;
  }
  else if(action=='archive'){
    this.router.navigate(["/dashboard/archive"]) ;
  }
  else if(action=='trash'){
    this.router.navigate(["/dashboard/trash"]) ;
  }
}
}
