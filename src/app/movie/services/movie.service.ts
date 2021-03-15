import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

// fake list
// import { Movie, movies } from '../models/movie.model';
// fake api
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // fake api localhost
  // private ROOT_URL = 'http://localhost:3000/movies';

  // fake api online
  private ROOT_URL: string = "https://my-json-server.typicode.com/naranjito72/hace-un-cine/movies";

  constructor(private http: HttpClient) { }
// filterMovies = '';
  // functions from http
  getMoviesHttp(){
    return this.http.get<Movie[]>(this.ROOT_URL);
  }
  getMovieHttp(id: number){
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`);
  }
  // get them all from a array in model
  //getMovies(){
  //  console.log(movies);
  //  return of(movies);
  //}
  //getMovie(id: number){
  //  return of(
  //    movies.find(movie => +movie.id === +id)
  //  );
  //}
// end functions array in model
}
