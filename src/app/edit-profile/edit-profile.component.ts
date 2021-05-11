import { LocalStorage } from '@ngx-pwa/local-storage';
import { Signup } from './../Model/signup';
import { ApiCallerService } from './../api-caller.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private router:Router,   private _snackBar: MatSnackBar, private title: Title,private api:ApiCallerService, private localstorage:LocalStorage) { }

  name:string;
  email:string;
  ngOnInit(): void {
    if (localStorage.length === 0) {
      this.router.navigate(['/login']);

    }
    this.title.setTitle('Edit Profile');
this.email = localStorage.getItem('userid');
this.name = localStorage.getItem('name');
  }
S: Signup = new Signup();

  updateProfile(){

    if(this.name === undefined || this.name.trim().length === 0){
      this._snackBar.open('Name can\'t be empty', '❌', {
        duration: 2000,
      });
      // this.ngOnInit();

    }
    else{


    this.S.email = this.email;
    this.S.name = this.name;

this.api.updateProfile(this.S).subscribe(
  data =>{

  }
);
localStorage.setItem('name',this.name);
this.ngOnInit();
this._snackBar.open('Profile Updated', '✔️', {
  duration: 2000,
});
// this.ngOnInit();
this.router.navigateByUrl('/profile');
  }
}



openSnackBar() {
  this._snackBar.open('Profile Updated', '✔️', {
    duration: 2000,
  });
  // this.ngOnInit();
  this.router.navigateByUrl('/view');
}

}
