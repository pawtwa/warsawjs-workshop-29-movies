import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../services/movie/request.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

}
