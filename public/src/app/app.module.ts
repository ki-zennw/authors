import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorsNewComponent } from './authors-new/authors-new.component';
import { AuthorsEditComponent } from './authors-edit/authors-edit.component';
import { AuthorsShowComponent } from './authors-show/authors-show.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsListComponent,
    AuthorsNewComponent,
    AuthorsEditComponent,
    AuthorsShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
