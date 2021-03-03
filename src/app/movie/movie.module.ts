import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieComponent } from './movie/movie.component';
import { SharedModule } from '../shared/shared/shared.module';
// collection of components

@NgModule({
  declarations: [
    MovieListComponent,
     MovieDetailComponent,
     MovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ],
  exports: [MovieListComponent, MovieDetailComponent, MovieComponent]
})
export class MovieModule { }
