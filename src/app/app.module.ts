import { FormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { MessagesComponent } from './messages/messages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HttpClientModule } from '@angular/common/http';
// import { MovieComponent } from './movie/movie.component';
// import { MovieDetailComponent } from './movie-detail/movie-detail.component';
// import { GenreComponent } from './genre/genre.component';
// import { LoginComponent } from './login/login.component';
// import { ProfileComponent } from './profile/profile.component';
// @NgModule({
//   declarations: [
//     AppComponent,
//     MessagesComponent,
//     DashboardComponent,
//     MovieComponent,
//     MovieDetailComponent,
//     GenreComponent,
//     LoginComponent,
//     ProfileComponent,
//   ],
//   imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { GenreComponent } from './genre/genre.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ProfileComponent, GenreComponent, ViewComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
