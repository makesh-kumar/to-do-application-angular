import { ApiCallerService } from './../api-caller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private api:ApiCallerService) { }

  news: any[];
  ngOnInit(): void {


this.api.getNews().subscribe(
  data =>{
    this.news = data.articles;
    console.log( this.news);
  }
);



  }


}
