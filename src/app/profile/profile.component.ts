import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router,  private title: Title) { }

  name:string;
  email:string;
  ngOnInit(): void {
    if (localStorage.length === 0) {
      this.router.navigate(['/login']);

    }
    this.title.setTitle('Profile');
this.email = localStorage.getItem('userid');
this.name = localStorage.getItem('name');
  }

}
