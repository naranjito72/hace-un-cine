import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'toh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  // assigning observables
  movies$?: Observable<Movie[]>;

  constructor(private movieService: MovieService,
              private navbarService: NavbarService) { }

  ngOnInit(): void {
   // this.movies$ = this.movieService.getMovies();// used for the arrray in model

   // use with fake json-server localhost
   this.movies$ = this.movieService.getMoviesHttp();
    this.navbarService.title?.next('Movie List');
  }
// How to unsubscribe. Look out for it
}
