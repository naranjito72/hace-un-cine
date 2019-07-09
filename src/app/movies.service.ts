import { Injectable } from '@angular/core';
import { Movies } from '../app/shared/movies';
import { mockMovies } from './shared/mockMovies';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {
public getMovies(): Movies[]  {return mockMovies; }
  constructor() { }
}
