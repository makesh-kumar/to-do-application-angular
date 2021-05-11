import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { strict } from 'assert';
import { ApiCallerService } from '../api-caller.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  constructor(private api: ApiCallerService, private title: Title, private _snackBar: MatSnackBar,) { }
  word: string;
  prev: string;
  dict: any[];
  Dict: any[];
  show: boolean;
  st: string[];
  ngOnInit(): void {
    this.title.setTitle('Dictionary');
    this.show = false;
    this.Dict = new Array();
    this.st = new Array();
  }


  getDict() {

    if (this.word === undefined || this.word.trim().length === 0) {
      this._snackBar.open('Enter something to search !', '❌', {
        duration: 2000,
      });
    }
    else {
      this.Dict = new Array();
      this.st = new Array();
      this.show = false;
      this.api.getDict(this.word).subscribe(
        data => {
          // console.log(data[0].fl);
          this.dict = data;

          // if (data.length === 0) { this.show = true; }
          for (let i = 0; i < this.dict.length; i++) {

            if (!this.st.includes(this.dict[i].fl) && this.dict[i].fl != undefined) {

              this.Dict.push(this.dict[i]);
            }
            this.st.push(this.dict[i].fl);
          }
          if (this.Dict.length === 0) {  this.show = true; }


        }
      );



    }
  }

  //  removeDuplicates(array) {
  //   let a = []
  //   array.map(x =>
  //     if(!a.includes(x) {
  //       a.push(x)
  //     })
  //   return a
  // };



}
