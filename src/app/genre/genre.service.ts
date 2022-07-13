import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre} from "./genre";

const endpoint = 'http://localhost:3000/genre'

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private url = 'http://localhost:3000/genre'

  constructor(private http: HttpClient) {
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.url}`);
  }

  createGenre(genre: Object): Observable<Object> {
    return this.http.post(`${this.url}`, genre);
    //return this.http.post(endpoint, genre);
  }
}
