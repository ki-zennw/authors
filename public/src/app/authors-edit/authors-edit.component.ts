import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-authors-edit',
  templateUrl: './authors-edit.component.html',
  styleUrls: ['./authors-edit.component.css']
})
export class AuthorsEditComponent implements OnInit {
  author = [];
  errors = [];

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

  onSubmitEditAuthor(): void {
    this._httpService.updateAuthor(this.author).subscribe((resData: any) => {
      console.log("RESDATA TO UPDATE:", resData);
      if (resData.error) {
        this.errors = resData.error.errors;
        this._router.navigate(['/edit/' + this.author._id]);
      }
      else {
        this._router.navigate(['/show/' + this.author._id]);
      }
    })
  }

}
