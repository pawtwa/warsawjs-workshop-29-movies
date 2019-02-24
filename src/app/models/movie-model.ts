import {FetchListResponseBody} from '../shared/services/movie/request.service';

export interface MovieModelInterface {
  id: string;
  title: string;
}

export class Movie {
  id: string;
  title: string;

  constructor(abc: MovieModelInterface | FetchListResponseBody) {
    const {id, title} = abc;
    this.id = id;
    this.title = title;
  }
}
