import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'toh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  id?: number;
  movie?: Movie;
  movieSub$?: Subscription

  constructor(private movieService: MovieService,
              private navBarservice: NavbarService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieSub$ = this.movieService.getMovieHttp(this.id).subscribe(movie => {
      this.movie = movie ;
      this.navBarservice.title?.next(this.movie?.title);
      console.log(movie);
    });
  }
  ngOnDestroy(){
    this.movieSub$?.unsubscribe();
  }
}
