import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
// test changes ..
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  title = 'makesh.online';

  ngOnInit(): void {
    console.log('*** makesh.online ***');
    console.log('*** Developed & Designed by - Makesh ***');
  }
}
