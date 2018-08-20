import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsNewComponent } from './authors-new/authors-new.component';
import { AuthorsEditComponent } from './authors-edit/authors-edit.component';
import { AuthorsShowComponent } from './authors-show/authors-show.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorsListComponent
  },
  {
    path: 'new',
    component: AuthorsNewComponent
  },
  {
    path: 'edit/:_id',
    component: AuthorsEditComponent
  },
  {
    path: 'show/:_id',
    component: AuthorsShowComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
