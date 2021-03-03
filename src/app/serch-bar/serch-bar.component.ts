import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Movie } from '../movie/models/movie.model';
// get the url from movie service
import { MovieService } from '../movie/services/movie.service';

@Component({
  selector: 'toh-serch-bar',
  templateUrl: './serch-bar.component.html',
  styleUrls: ['./serch-bar.component.css']
})
export class SerchBarComponent implements OnInit {

movies$:Observable<Movie[]> | any;

  constructor(private movieService: MovieService) { }

  // ngModel data write down by user
filterMovies: string = '';

  ngOnInit(): void {
    // access to movie url
    this.movies$ = this.movieService.getMoviesHttp();
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

