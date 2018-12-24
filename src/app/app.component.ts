import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie/movie.service';
import { Observable } from 'rxjs';
import { MovieRef } from './services/movie/movie-responses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-movie-browser';
  arr = [0,1,2,3,4,5,6];
  list = [{number: 0}, {number: 1}, {number: 2}, {number: 3}, {number: 4}, {number: 5}, {number: 6}];
  public list$: Observable<[MovieRef]>;
  public displayedColumns = [
    'Title',
    'Year',
    'imdbID',
    'Type',
    // 'Poster'
  ];

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this.list$ = this._movieService.searchMovie({s: 'dre'});
  }

  onSearch($event: Observable<any>) {
    $event.subscribe( (result) => this.list$ = this._movieService.searchMovie(result));
  }
}
