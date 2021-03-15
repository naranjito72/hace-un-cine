import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { SearchBarService } from 'src/app/serch-bar/services/search-bar.service';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';
// import { FilterPipe } from '../../serch-bar/pipes/filter.pipe';
// utilización de sharedModule para acceder a pipe

@Component({
  selector: 'toh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  // assigning observables
  movies$?: Observable<Movie[]>;
  filterMovies: string = "";

  constructor(private movieService: MovieService,
              private navbarService: NavbarService,
              public searchService: SearchBarService) { }

  ngOnInit(): void {

   // this.movies$ = this.movieService.getMovies();// used for the arrray in model

   // use with fake json-server
   this.movies$ = this.movieService.getMoviesHttp();
    this.navbarService.title?.next('Movie List');
    this.filterMovies = this.searchService.filterMovies;
  }
// How to unsubscribe. Look out for it
}
