import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-authors-new',
  templateUrl: './authors-new.component.html',
  styleUrls: ['./authors-new.component.css']
})
export class AuthorsNewComponent implements OnInit {
  newAuthor: object = {
    name: '',
  }
  errors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params)
    });
  }

  onSubmitCreateAuthor() {
    this._httpService.createAuthor(this.newAuthor).subscribe((resData: any) => {
      if (resData.error) {
        console.log(resData.error.errors);
        this.errors = resData.error.errors;
        this._router.navigate(['/new']);
      }
      else {
        this.newAuthor = {
          name: '',
          // type: '',
          // description: '',
          // skill_1: '',
          // skill_2: '',
          // skill_3: '',
        }
        this._router.navigate(['/']);
      }
    })
  }

  // onSubmitCreateAuthor() {
  //   this._httpService.createAuthor(this.newAuthor).subscribe(
  //     () => {
  //       this.newAuthor = {
  //         name: '',
  //         // type: '',
  //         // description: '',
  //         // skill_1: '',
  //         // skill_2: '',
  //         // skill_3: '',
  //       }
  //       this._router.navigate(['/']);
  //     },
  //     (resData) => {
  //       this.errors = resData.error.errors;
  //       this._router.navigate(['/new']);
  //     }
  //   )
  // }

}
