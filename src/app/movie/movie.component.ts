import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movies: any = [];
  movie: Movie = new Movie();

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movies = [];
    this.movieService.getMovies().subscribe((data: {}) => {
      console.log(data);
      this.movies = data;
    });
  }

  save() {
    this.movieService.createMovie(this.movie).subscribe((data) => {
      console.log(data);
      this.movie = new Movie();
    });
  }

  onSubmit() {
    this.save();
    this.router.navigate(['']);
  }
}
