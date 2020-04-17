import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Movie from '../models/Movie';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY =  `?api_key=190dcc8d7c46eee2730df83d58dd526d`;

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient){ }

  getPopularMovies(): Observable<Array<Movie>>{
    return this.http.get<Array<Movie>>(`${BASE_URL}/popular${API_KEY}`);
  }

  getInTheaterMovies(): Observable<Array<Movie>>{
    return this.http.get<Array<Movie>>(`${BASE_URL}/now_playing${API_KEY}`);
  }
}
