import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  getMovies(){
    return [
      {'movieId':1,
      'movieName':'aaa',
      'directorName':'xyz',
      'cast':'abc'
      },
      {'movieId':2,
      'movieName':'2aaa',
      'directorName':'2xyz',
      'cast':'2abc'
      },
      {'movieId':3,
      'movieName':'3aaa',
      'directorName':'2xyz',
      'cast':'3abc'
      }
    ]
  }
}
