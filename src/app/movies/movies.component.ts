import { MovieData } from './../Model/movie-data';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private api: ApiCallerService, private title: Title, private _snackBar: MatSnackBar,) { }
  word: string;
  Movie: any[];
  Mdata: MovieData[];
  emp: boolean;
  ngOnInit(): void {
    this.title.setTitle('Movie-Info');
    this.Mdata = new Array();;
    // this.Movie = null;
  }

  Dlist: boolean;

  MovieList: any[];

  getMovieList() {

    if (this.word === undefined || this.word.trim().length === 0) {
      this._snackBar.open('Enter movie name to search !', '❌', {
        duration: 2000,
      });
    }
    else {

      this.Dlist = true;
      this.emp = false;

      this.api.getMovieList(this.word).subscribe(
        data => {

          if (data.Search === undefined) {

            this.emp = true;
          }
          this.MovieList = data.Search;

        }
      );
    }
  }

  getMovie(id: string) {
    this.Movie = new Array();
    this.Dlist = false;

    this.api.getMovie(id).subscribe(
      data => {
        // console.log('99999');

        // console.log(data.Rated);
        // this.Movie[0] = data;
        this.Mdata[0] = data;
        // this.Movie.push(data);



      }
    );
  }

  get() {

  }
}
