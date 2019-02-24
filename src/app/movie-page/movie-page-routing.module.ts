import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListPageComponent} from './components/movie-list-page/movie-list-page.component';
import {MovieDetailsPageComponent} from './components/movie-details-page/movie-details-page.component';
import {MovieResolver} from './movie-resolver';

const routes: Routes = [
  {
    path: '',
    component: MovieListPageComponent
  },
  {
    path: ':id',
    component: MovieDetailsPageComponent,
    resolve: {
      movie: MovieResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviePageRoutingModule { }
