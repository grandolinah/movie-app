import { Component, OnInit } from '@angular/core';

import { MovieService} from '../services/movie.service';
import Movie from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<Movie>;
  singleMovie: Movie;
  inTheaterMovies: Array<Movie>;
  message = null;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = data['results'].slice(0, 6);
      this.singleMovie = this.popularMovies[0];
    });

    this.movieService.getInTheaterMovies().subscribe(data => {
      this.inTheaterMovies = data['results'].slice(0,6);
    })
  }

  fromChild(event) {
    console.log(event);
    this.message = event;
  }

}
