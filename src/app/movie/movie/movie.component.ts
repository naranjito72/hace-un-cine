import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'toh-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie | undefined;

  constructor() { }

 
  ngOnInit(): void {
  }

}
