import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors() {
    return this._http.get('/get_authors');
  }

  // getRatings() {
  //   return this._http.get('/ratings');
  // }

  showAuthor(id) {
    console.log("SHOW AUTHOR ID:", id);
    return this._http.get('/edit_author/' + id);
  }

  createAuthor(author) {
    console.log(author);
    return this._http.post('/new_author', author);
  }

  // createRating(ratingCakeId, newRating) {
  //   console.log("create rating service data:", ratingCakeId, newRating)
  //   return this._http.put('/new_rating/' + ratingCakeId, newRating);
  // }

  deleteAuthor(id) {
    console.log("DELETE AUTHOR:", id);
    return this._http.delete('/delete/' + id);
  }

  updateAuthor(author) {
    console.log("UPDATE AUTHOR ID:", author);
    console.log(author._id)
    return this._http.put('/update/' + author._id, author);
  }
}
