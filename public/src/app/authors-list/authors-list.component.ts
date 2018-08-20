import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  authors = [];

  constructor(
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors() {
    this._httpService.getAuthors().subscribe(resData => {
      console.log("GOT OUR RESDATA", resData);
      this.authors = resData['authors'];
    })
  }

  onButtonClickDelete(id): void {
    // id = id.target.id;
    this._httpService.deleteAuthor(id).subscribe((resData) => {
      console.log("DATA TO DELETE:", resData);
    })
    this.getAllAuthors();
  }

}
