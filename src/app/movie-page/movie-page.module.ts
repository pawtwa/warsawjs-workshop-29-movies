import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviePageRoutingModule } from './movie-page-routing.module';
import { MovieListPageComponent } from './components/movie-list-page/movie-list-page.component';
import { MovieDetailsPageComponent } from './components/movie-details-page/movie-details-page.component';
import { MovieNotFoundPageComponent } from './components/movie-not-found-page/movie-not-found-page.component';
import {SharedModule} from '../shared/shared.module';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';

@NgModule({
  declarations: [
    MovieListPageComponent,
    MovieDetailsPageComponent,
    MovieNotFoundPageComponent,
    MovieListItemComponent
  ],
  imports: [
    CommonModule,
    MoviePageRoutingModule,
    SharedModule
  ]
})
export class MoviePageModule { }
