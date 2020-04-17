import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import Movie from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input('movie')
  movie: Movie;

  @Output()
  clickButtonEmitter = new EventEmitter();

  imagePath: string;

  constructor() { }

  ngOnInit() {
    this.imagePath = `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
  }

  clickButton(){
    console.log('button with id' + this.movie.id);
    this.clickButtonEmitter.emit(this.movie.id.toString());
  }
}
