import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { MovieSearchOptions, MovieIdOptions } from './movie-options';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) { }

  public searchMovie(options: MovieSearchOptions): Observable<any> {
    return this.get(`${this.path}`, options)
      .pipe(map( (response) => response.Search));
  }

  public getMovie(imdbId: string): Observable<any> {
    return this.get(`${this.path}`, {i: imdbId});
  }

  private get(path: string, options: MovieIdOptions | MovieSearchOptions): Observable<any> {
    return this._http.get(path, this.buildOption(options));
  }

  private get path(): string {
    return `${environment.movieApi}`;
  }

  private buildOption(options): {params} {
    let params = new HttpParams();
    params = this.addApiKey(params);
    params = this.addMandatoryFilters(params);

    for (const prop in options) {
      if (options[prop]) {
        params = params.append(prop, options[prop]);
      }
    }
    return {params: params};
  }

  private addApiKey(httpParams: HttpParams): HttpParams {
    return httpParams.append('apikey', environment.movieApiKey);
  }

  private addMandatoryFilters(httpParams: HttpParams): HttpParams {
    return httpParams.append('type', 'movie');
  }
}
