import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../../../models/movie-model';

export interface FetchListResponseBody {
  id: string;
  title: string;
  rating: number;
  votes: number;
  posterSrc: string;
  genres: Array<string>;
  releaseDate: string;
}

export interface FetchMovieResponseBody {
  id: string;
  title: string;
  budget: number;
  description: string;
  rating: number;
  votes: number;
  posterSrc: string;
  homepage?: string;
  genres: Array<string>;
  duration: number;
  videos: Array<{
    name: string;
    size: number;
    type: string;
    url: string;
  }>;
}

const API_URL = 'http://vps135320.ovh.net:12345';
const API_METHODS = {
  fetchList: `${API_URL}/list/:page`,
  fetchMovie: `${API_URL}/movie/:id`
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private mockData: Movie[] = [
    {id: '399579', title: 'Alita: Battle Angel'},
    {id: '324857', title: 'Spider-Man: Into the Spider-Verse'},
    {id: '480530', title: 'Creed II'},
    {id: '166428', title: 'How to Train Your Dragon: The Hidden World'},
    {id: '490132', title: 'Green Book'},
    {id: '450465', title: 'Glass'},
    {id: '424694', title: 'Bohemian Rhapsody'},
    {id: '512196', title: 'Happy Death Day 2U'},
    {id: '404368', title: 'Ralph Breaks the Internet'},
    {id: '452832', title: 'Serenity'},
    {id: '375262', title: 'The Favourite'},
    {id: '505954', title: 'T-34'},
    {id: '438650', title: 'Cold Pursuit'},
    {id: '338952', title: 'Fantastic Beasts: The Crimes of Grindelwald'},
    {id: '375588', title: 'Robin Hood'},
    {id: '428078', title: 'Mortal Engines'},
    {id: '332562', title: 'A Star Is Born'},
    {id: '299536', title: 'Avengers: Infinity War'},
    {id: '297802', title: 'Aquaman'},
    {id: '457136', title: 'Mary Queen of Scots'}
    ];

  constructor(private http: HttpClient) { }

  public fetchList(page = '1'): Observable<Array<FetchListResponseBody>> {
    return this.makeRequest(API_METHODS.fetchList, {
      page
    });
  }

  public fetchMovie(id: string): Observable<FetchMovieResponseBody> {
    return this.makeRequest(API_METHODS.fetchMovie, {
      id
    });
  }

  private makeRequest<T>(url, params = {}): Observable<T> {
    Object.entries(params)
      .forEach(([key, value]) => {
        url = url.replace(`:${key}`, value);
      });

    return this.http.get<T>(url);
  }

  public fetchListMock(): Movie[] {
    return this.mockData;
  }

  public fetchMovieMock(id: string): Movie {
    return this.mockData.find((item) => {
      return item.id === id;
    });
  }
}
