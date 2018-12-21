import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-movie-browser';
  arr = [0,1,2,3,4,5,6];
  list = [{number: 0}, {number: 1}, {number: 2}, {number: 3}, {number: 4}, {number: 5}, {number: 6}];
}
