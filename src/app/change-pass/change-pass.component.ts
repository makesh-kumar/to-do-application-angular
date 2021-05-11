import { PasswordEncDecService } from './../password-enc-dec.service';
import { Router } from '@angular/router';
import { Signup } from './../Model/signup';
import { ApiCallerService } from './../api-caller.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {


  oldPass: string;
  newPass: string;
  conPass: string;

  hide:boolean;
  ahide:boolean;
  bhide:boolean;
  PASS: string;

  email:string;


  constructor( private _snackBar: MatSnackBar,private api:ApiCallerService,private router:Router,
    private title: Title,private ecd:PasswordEncDecService ) { }
  S: Signup = new Signup();
  ngOnInit(): void {
    if (localStorage.length === 0) {
      this.router.navigate(['/login']);

    }
    this.title.setTitle('Change Password');
    this.email = localStorage.getItem('userid');
    this.ahide = true;  this.bhide = true;  this.hide = true;
    this.PASS = localStorage.getItem('password');
  }

  changePass(){
    if(this.oldPass === undefined || this.oldPass.trim().length === 0){
      this._snackBar.open('Enter Old Password', '❌', {
        duration: 2000,
      });
    }
    else if(this.newPass === undefined || this.newPass.trim().length === 0){
      this._snackBar.open('Enter New Password', '❌', {
        duration: 2000,
      });
    }

    else if(this.newPass.length < 6){
      this._snackBar.open('Password should contain min 6 char', '❌', {
        duration: 2000,
      });
    }
    else if(this.conPass === undefined || this.conPass.trim().length === 0){
      this._snackBar.open('Enter Confirm Password', '❌', {
        duration: 2000,
      });
    }

    else if(this.conPass != this.newPass){
      this._snackBar.open('Password Mismatch', '❌', {
        duration: 2000,
      });
    }

    // else if( this.oldPass !== this.PASS){
      else if( this.oldPass !==  this.ecd.get('123@ABCD',this.PASS)){
      this._snackBar.open('Wrong Old Password', '❌', {
        duration: 2000,
      });
    }
    else{
      this.S.email = this.email;
      this.S.pass =  this.ecd.set('123@ABCD',this.newPass);
      this.S.conpass = this.ecd.set('123@ABCD',this.newPass);
      this.api.changePassword(this.S).subscribe(
        data=>{

        }
      );
      this.ngOnInit();
this._snackBar.open('Password Changed,Login to continue', '✔️', {
  duration: 2000,
});

localStorage.clear();
this.router.navigate(['/login']);



    }
  }

}
