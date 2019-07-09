import { Component, OnInit } from '@angular/core';
import { Movies } from '../shared/movies';
import { mockMovies } from '../shared/mockMovies';
import { MoviesService } from 'src/app/movies.service';
@Component({
  selector: 'app-listapelis',
  templateUrl: './listapelis.component.html',
  styleUrls: ['./listapelis.component.css']
})
export class ListapelisComponent implements OnInit {

  public movies: Movies[];
  public selectedMovie: Movies;

  constructor( public moviesService: MoviesService ) { }

  ngOnInit() {this.movies = this.moviesService.getMovies(); }
  public onSelect(movie: Movies) {
    this.selectedMovie = movie;
  }
  }
