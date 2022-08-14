import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { View } from './view';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  private url = 'http://localhost:3000/view';

  constructor(private http: HttpClient) {}

  getViews(): Observable<View[]> {
    return this.http.get<View[]>('http://localhost:3000/view');
  }
}
