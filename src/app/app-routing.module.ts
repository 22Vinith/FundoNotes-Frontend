import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { HeaderContainerComponent } from './components/header-container/header-container.component';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrashContainerComponent } from './components/trash-container/trash-container.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardContainerComponent,
    children: [
      {
        path: "notes",
        component: NotesContainerComponent
      },
      {
        path: "archive",
        component: ArchiveContainerComponent
      },
      {
        path: "trash",
        component: TrashContainerComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
