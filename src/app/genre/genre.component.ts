import {Component, OnInit} from '@angular/core';
import {GenreService} from "./genre.service";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genres: any = [];

  constructor(private genreService: GenreService) {
  }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres() {
    this.genres = [];
    this.genreService.getGenres().subscribe((data: {}) => {
      console.log(data);
      this.genres = data;
    })
  }
}
