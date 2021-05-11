import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../api-caller.service';
import { timer } from 'rxjs';
import { delay, take } from 'rxjs/operators';
@Component({
  selector: 'app-news2',
  templateUrl: './news2.component.html',
  styleUrls: ['./news2.component.css']
})
export class News2Component implements OnInit {


  constructor(private api: ApiCallerService, private title: Title) { }

  spin: boolean;
  news: any[];
  ngOnInit(): void {
    this.spin = true;
    this.title.setTitle('News Headlines');
    this.getNews();


  }

  async getNews() {
    this.spin = true;



    this.api.getNews2().subscribe(
      data => {


        this.news = data.articles;
        // console.log('*** JAVA ***');
        // console.log( this.news);
      }
    );
    // await timer(3000).pipe(take(1)).toPromise();
    this.spin = false;
  }
  cat: string;

  getNewsOf() {

    if (this.cat === 'All') {
      this.getNews();
    }
    else {
      this.spin = true;
      this.api.getNewsOf(this.cat).subscribe(
        data => {
          this.news = data.articles;
          // console.log('*** JAVA ***');
          // console.log( this.news);
        }
      );
      this.spin = false;
    }

  }
}
