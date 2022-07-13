import {Component, OnInit} from '@angular/core';
import {GenreService} from "./genre.service";
import {Genre} from "./genre";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genres: any = [];
  genre: Genre = new Genre();

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

  save() {
    this.genreService
      .createGenre(this.genre)
      .subscribe(data => {
        console.log(data)
        this.genre = new Genre()
      })
  }

  onSubmit() {
    this.save()
    // потом сделать redirect
  }
}
