import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {MatButtonModule, MatCheckboxModule, MatListModule} from '@angular/material';
import {MovieResolver} from '../movie-page/movie-resolver';

@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
  ],
  exports: [
    CommonModule,
    MovieDetailsComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
  ],
  providers: [
    MovieResolver
  ]
})
export class SharedModule { }
