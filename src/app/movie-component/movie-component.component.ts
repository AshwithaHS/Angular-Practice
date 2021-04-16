import { Component, OnInit } from '@angular/core';
import {MoviesService } from '../services/movies.service'
@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit {
movies:any;
  constructor(private movieservice:MoviesService) { }

  ngOnInit(): void {
   this.movies= this.movieservice.getMovies();
  }



}
