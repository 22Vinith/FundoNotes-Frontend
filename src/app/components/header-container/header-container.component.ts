import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service/data.service';
import { IMG_ICON, LIST_VIEW_ICON, MENU_ICON, OTHER_MENU_ICON, REFRESH_ICON, SEARCH_ICON, SETTING_ICON } from 'src/assets/svg-icons';
import { NotesService } from '../../services/notes-service/notes.service'

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderContainerComponent implements OnInit {
  searchQuery: string = ""
  email: string | null = '';
  @Output() handledrawer=new EventEmitter();
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private dataService: DataService, private router:Router, private authService:NotesService) {
    iconRegistry.addSvgIconLiteral('mainmenu-icon', sanitizer.bypassSecurityTrustHtml(MENU_ICON));
    iconRegistry.addSvgIconLiteral('refresh-icon', sanitizer.bypassSecurityTrustHtml(REFRESH_ICON));
    iconRegistry.addSvgIconLiteral('list-icon', sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON));
    iconRegistry.addSvgIconLiteral('settings-icon', sanitizer.bypassSecurityTrustHtml(SETTING_ICON));
    iconRegistry.addSvgIconLiteral('search-icon', sanitizer.bypassSecurityTrustHtml(SEARCH_ICON));
    iconRegistry.addSvgIconLiteral('othermenu-icon', sanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON));
    iconRegistry.addSvgIconLiteral('image-icon', sanitizer.bypassSecurityTrustHtml(IMG_ICON));
  }

  ngOnInit() {
    this.email = this.authService.getEmailFromToken();
  }

  toggledrawer(){
    this.handledrawer.emit()
  }

  handleSearchQuery() {
    this.dataService.updateSearchQuery(this.searchQuery)
  }

  handleLogout(action:string){
    localStorage.setItem("authToken", '')
    this.router.navigate([""]) ;
  }
}
