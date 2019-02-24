import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Movie} from '../models/movie-model';
import {RequestService} from '../shared/services/movie/request.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class MovieResolver implements Resolve<Movie> {
  constructor(private requestService: RequestService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> | Promise<Movie> | Movie {
    const observable = this.requestService.fetchMovie(route.params.id);
    console.log('observable 1', observable);
    // observable
    return observable;
  }
}
