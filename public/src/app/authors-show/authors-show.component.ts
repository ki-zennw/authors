import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-authors-show',
  templateUrl: './authors-show.component.html',
  styleUrls: ['./authors-show.component.css']
})
export class AuthorsShowComponent implements OnInit {
  author = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params._id);
      this._httpService.showAuthor(params._id).subscribe(resData => {
        // this.selectedPet = true;
        this.author = resData['author'];
        console.log(resData);
      })
    })
  }

  onButtonClickDelete(id): void {
    // id = id.target.id;
    this._httpService.deleteAuthor(id).subscribe((resData) => {
      console.log("DATA TO DELETE:", resData);
    })
    this._router.navigate(['/']);
  }


}
