import {Component, OnDestroy, OnInit} from '@angular/core';
import {Movie} from '../../../models/movie-model';
import {RequestService} from '../../../shared/services/movie/request.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.css']
})
export class MovieListPageComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  fetchListSubscription: Subscription;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.fetchListSubscription = this.requestService.fetchList('1').subscribe((response) => {
      const movieList = response.map(item => new Movie(item));
      this.movies = [...movieList];
    });
  }

  ngOnDestroy(): void {
    this.fetchListSubscription.unsubscribe();
  }
}
