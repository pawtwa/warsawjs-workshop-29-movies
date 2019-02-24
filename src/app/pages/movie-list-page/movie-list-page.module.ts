import { NgModule } from '@angular/core';
import {MovieListPageComponent} from './components/@init/movie-list-page.component';
import {MovieListPageRoutingModule} from './movie-list-page-routing.module';

@NgModule({
  declarations: [
    MovieListPageComponent,
  ],
  imports: [
    MovieListPageRoutingModule
  ]
})
export class MovieListPageModule { }
