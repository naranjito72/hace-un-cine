import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Movie } from '../movie/models/movie.model';
// get the url from movie service
import { MovieService } from '../movie/services/movie.service';
import { SearchBarService } from './services/search-bar.service';

@Component({
  selector: 'toh-serch-bar',
  templateUrl: './serch-bar.component.html',
  styleUrls: ['./serch-bar.component.css']
})
export class SerchBarComponent implements OnInit {

movies$:Observable<Movie[]> | any;
 // ngModel data write down by user
 filterMovies: string = "";
  constructor(private movieService: MovieService,
              public searchService: SearchBarService) { }

  ngOnInit(): void {
    // access to movie url
    this.movies$ = this.movieService.getMoviesHttp();
    this.filterMovies = this.searchService.filterMovies;
  }

  checkMovies(): ReturnType<typeof setTimeout> {
    let timer = setTimeout(() => {
      console.log(this.filterMovies);
    }, 1000);
   // return timer;
    distinctUntilChanged();

    return timer;
    }

  }// end class

