import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../../models/movie-model';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  @Input() public movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
