import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../../models/movie-model';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent implements OnInit {
  movie: Movie;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.movie = new Movie(this.route.snapshot.data.movie);
  }
}
