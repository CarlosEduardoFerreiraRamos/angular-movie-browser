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
  public title = 'Movie Browser';

  public list$: Observable<[MovieRef]>;

  public displayedColumns = [
    'Title',
    'Year',
    'imdbID',
    'Type'
  ];

  public objectKeys = Object.keys;

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this.list$ = this._movieService.searchMovie({s: 'dre'});
  }

  onSearch($event: Observable<any>): void {
    $event.subscribe( (result) => this.list$ = this._movieService.searchMovie(result));
  }

  public onOpenDetail(imdbId): Observable<any> {
    return this._movieService.getMovie(imdbId);
  }
}
