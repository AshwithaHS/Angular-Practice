import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movies:any;
  constructor(private movieservice:MoviesService) { }

  ngOnInit(): void {
    this.movies= this.movieservice.getMovies();
  }

}
