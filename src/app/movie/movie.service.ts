import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Movie} from "./movie";

const endpoint = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [];

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(endpoint + 'movie');
  }

  /*getMovies(){
    const movies = of(MOVIES);
    return movies;
  }*/

}
