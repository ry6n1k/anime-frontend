import { ViewService } from './view.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  views: any = [];

  constructor(private viewService: ViewService) {}

  ngOnInit(): void {
    this.getViews();
  }
  
  getViews() {
    this.views = [];
    this.viewService.getViews().subscribe((data) => {
      this.views = data;
    });
  }
}
