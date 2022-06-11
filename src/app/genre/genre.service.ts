import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre} from "./genre";

const endpoint = 'http://localhost:3000/genre'

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) {
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(endpoint);
  }
}
