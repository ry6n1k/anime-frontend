import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private url = 'http://localhost:3000/movie';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.url}`);
  }

  createMovie(movie: Object): Observable<Object> {
    return this.http.post(`${this.url}`, movie);
  }
}
