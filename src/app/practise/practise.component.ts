import { PasswordEncDecService } from './../password-enc-dec.service';
import { ApiCallerService } from './../api-caller.service';
import { LoginData } from './../Model/login-data';
import { Signup } from './../Model/signup';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorage } from '@ngx-pwa/local-storage';
// import { sign } from 'crypto';
@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})

export class PractiseComponent implements OnInit {


  constructor(private location: Location, private router: Router, private title: Title,
    private api:ApiCallerService,private ecd: PasswordEncDecService, private _snackBar: MatSnackBar,  private localStorage: LocalStorage) { }
  signup: Signup ;
  hide = true;
  chide = true;
  login: LoginData;
  inUser: Signup;

  spin: boolean;
  upspin: boolean;
  ngOnInit(): void {
    this.title.setTitle('Login');
    this.login = new LoginData();
    this.signup = new Signup();
    this.inUser = new Signup();
  this.hide = true;
    this.chide = true;
  }
  switch() {
    this.location.replaceState('/signUp');
  }
  covidTrack() {
    this.router.navigate(['/covid-tracker']);
  }
news(){
  this.router.navigate(['/news']);
}

  log(){



    if(this.login.email === undefined || this.login.email.trim().length === 0){
      this._snackBar.open('Please enter valid email !', '❌', {
        duration: 2000,
      });
    }
    else if(this.login.password === undefined || this.login.password.trim().length === 0)
    {
      this._snackBar.open('Please enter valid password !', '❌', {
        duration: 2000,
      });
    }
    else{
      this.spin = true;
      this.api.isUser(this.login.email).subscribe(
        data=>{
          if(data == null){
            this._snackBar.open('Email not registered !', '❌', {
              duration: 2000,
            });
            this.spin = false;
          }
          else{

            this.inUser = data;
            if(this.inUser.pass != this.login.password){
              // if(this.ecd.get('123@ABCD',this.inUser.pass) != this.login.password){
// 
              this.spin = false;
              this._snackBar.open('Wrong password !', '❌', {
                duration: 2000,
              });
            }
            else{
              this._snackBar.open('Login successfull !', '✔️', {
                duration: 2000,
              });
              this.spin = false;

            localStorage.setItem('userid',this.inUser.email);
            localStorage.setItem('name',this.inUser.name);
            localStorage.setItem('password',this.inUser.pass);
              this.router.navigateByUrl('/home');
            }


          }
        }
      );


    this.api.login(this.login).subscribe();
    }
  }
  S: Signup;
  old() {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.signup.name === undefined || this.signup.name.trim().length ==0){
      this._snackBar.open('Please enter valid name !', '❌', {
        duration: 2000,
      });
    }
    else if(this.signup.email === undefined || this.signup.email.trim().length ==0|| !EMAIL_REGEXP.test(this.signup.email.toString())){
      this._snackBar.open('Please enter valid email !', '❌', {
        duration: 2000,
      });
    }
      else if(this.signup.pass === undefined || this.signup.pass.trim().length <6 ){

        this._snackBar.open('Password should be Min 6 characters !', '❌', {
          duration: 2000,
        });
    }
    else if(this.signup.conpass === undefined || this.signup.conpass.trim().length ==0){

      this._snackBar.open('Password should be Min 6 characters !', '❌', {
        duration: 2000,
      });
    }
    else if(this.signup.pass!=this.signup.conpass){
      this._snackBar.open('Password Mismatch !', '❌', {
        duration: 2000,
      });
    }
    else{
      this.upspin = true;


    this.S = new Signup();
    this.S.userid = this.signup.email;
    this.S.name = this.signup.name;
    this.S.email = this.signup.email;

    this.S.pass = this.ecd.set('123@ABCD',this.signup.pass);
    // console.log('**Original -> '+this.signup.pass);
    // console.log('**Encp -> '+this.ecd.set('123@ABCD',this.signup.pass));
    // console.log('**DEcr -> '+this.ecd.get('123@ABCD','B14iKN+cOQEnbwBgoMbo2g=='));
    this.S.pass = this.signup.pass;
    this.S.conpass = this.ecd.set('123@ABCD',this.signup.pass);


    this.S.signupid =    Math.floor((Math.random() * 1000) + 1);



    this.api.isUser(this.signup.email).subscribe(
      data=>{


        if(data === null){
          this.api.sign(this.S).subscribe();
          this.upspin = false;
          //error - user with same email  present
          this._snackBar.open('Registered Sucessfully !', '✔️', {
            duration: 2000,
          });


          this.router.navigateByUrl('/login');
          this.ngOnInit();
        }
        else{
          //callsignup api
          this._snackBar.open('Email already have account !', '❌', {
            duration: 2000,
          });
          this.upspin = false;
          this.ngOnInit();

        }
      }
    );
    }
  }


  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required, Validators.nullValidator]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  dict(){
    this.router.navigateByUrl('/dictionary');
  }
  movie(){
    this.router.navigateByUrl('/movies');
  }
}
