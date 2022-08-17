import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-movie',
  templateUrl: './movie-add.component.html',
})
export class MovieAddComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
      year: [''],
      episodes: [''],
      url: [''],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    var formData: any = new FormData();
    formData.append('name', this.form.get('name')?.value);
    formData.append('description', this.form.get('url')?.value);
    formData.append('year', this.form.get('url')?.value);
    formData.append('episodes', this.form.get('url')?.value);
    formData.append('url', this.form.get('url')?.value);
    console.log(formData);
    this.http.post('http://localhost:3000/movie', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
    );
  }
}
