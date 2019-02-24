import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListPageComponent} from './components/@init/movie-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieListPageRoutingModule { }
