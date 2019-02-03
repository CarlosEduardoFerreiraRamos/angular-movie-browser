import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from './services/movie/movie.service';
import { Observable, pipe } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { MovieRef } from './services/movie/movie-responses';
import { PopupMessageComponent } from './components/popup-message/popup-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('notFoundPopup') popup: PopupMessageComponent;

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
    $event.subscribe((result) => {
      this.list$ = this._movieService
        .searchMovie(result)
        .pipe(tap( (mappedRes) => {
          if (!mappedRes) {
            this.popup.onOpenMessage('Movie not found!', 'NOT FOUND!');
          }
      }));
    });
  }

  public onOpenDetail(imdbId): Observable<any> {
    return this._movieService.getMovie(imdbId).pipe(map( (value) => [value]));
  }

  public onAddMovie(data, array): void {
    this._movieService.getMovie(data)
      .subscribe( next => array.push(next));
  }
}
