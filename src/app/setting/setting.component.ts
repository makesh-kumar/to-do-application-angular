import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private router:Router, private title:Title) { }

  showEditProfile:boolean;
  showChangePass: boolean

  ngOnInit(): void {
    if (localStorage.length === 0) {
      this.router.navigate(['/login']);

    }
    this.title.setTitle('Settings');
    this.showEditProfile = false;
    this.showChangePass = false;
  }
  editProfile(){
    this.showEditProfile = true;
    this.showChangePass = false;
  }

  changePass(){
this.showChangePass = true;
this.showEditProfile = false;
  }
}
