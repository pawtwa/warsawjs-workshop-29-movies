import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {MovieListPageComponent} from './pages/movie-list-page/components/@init/movie-list-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movie',
    pathMatch: 'full'
  },
  {
    path: 'movie',
    loadChildren: './pages/movie-list-page/movie-list-page.module#MovieListPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
