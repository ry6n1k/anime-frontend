import {Component, OnInit} from '@angular/core';
import {Movie} from './movie';
import {MovieService} from "./movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: any = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movies = [];
    this.movieService.getMovies().subscribe((data: {}) => {
      console.log(data);
      this.movies = data;
    });
  }

}
