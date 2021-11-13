import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiCallerService } from '../api-caller.service';
import { IILoginData } from '../Model/login-data';
import { ISignup } from '../Model/signup';
@Component({
  selector: 'app-alog',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiCallerService,
    private _snackBar: MatSnackBar
  ) {}
  public loginData: IILoginData;
  public loggedUser: ISignup;
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public loginPassType = 'password';
  public registerPassType = 'password';
  public registerConfirmPassType = 'password';
  public isShowLoginPassword: boolean;

  public isShowRegisterPassword: boolean;
  public isShowRegisterConfirmPassword: boolean;

  ngOnInit(): void {
    this.initLoginForm();
    this.initRegisterForm();
  }

  initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      emailId: ['test', Validators.required],
      password: ['test', Validators.required],
    });
  }

  initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      emailId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  isFieldInvalid(fieldName: string): boolean {
    return (
      this.loginForm.controls[fieldName].dirty &&
      this.loginForm.controls[fieldName].status == 'INVALID'
    );
    // return this.loginForm.controls[fieldName].dirty && this.loginForm.controls[fieldName].status == "INVALID"
  }

  isRegisterFieldValid(fieldName: string): boolean {
    return (
      this.registerForm.controls[fieldName].dirty &&
      this.registerForm.controls[fieldName].status == 'INVALID'
    );
    // return this.loginForm.controls[fieldName].dirty && this.loginForm.controls[fieldName].status == "INVALID"
  }

  isConfirmPasswordMatches() {
    return (
      this.registerForm.controls.confirmPassword.dirty &&
      this.registerForm.controls.password.value !==
        this.registerForm.controls.confirmPassword.value
    );
  }
  submitForm() {
    if (this.loginForm.valid) {
      this.loginData = {
        emailId: this.loginForm.controls.emailId.value,
        password: this.loginForm.controls.password.value,
      };
      // this.loginData.emailId = this.loginForm.controls.emailId.value;
      // this.loginData.password = this.loginForm.controls.password.value;

      // localStorage.setItem('userid', this.loggedUser.email);
      // localStorage.setItem('name', this.loggedUser.name);
      // localStorage.setItem('password', this.loggedUser.pass);
      this.router.navigateByUrl('/home');
      // API ISSUE
      // this.apiService.isUser(this.loginData.emailId).subscribe(
      //   (data) => {
      //     if (data === null) {
      //       this._snackBar.open('Email not registered !', '❌', {
      //         duration: 2000,
      //       });
      //     } else {
      //       this.loggedUser = data;
      //       if (this.loggedUser.pass !== this.loginData.password) {
      //         this._snackBar.open('Password wrong !', '❌', {
      //           duration: 2000,
      //         });
      //       } else {
      //         this._snackBar.open('Login Success!', '✔️', {
      //           duration: 2000,
      //         });
      //         localStorage.setItem('userid', this.loggedUser.email);
      //         localStorage.setItem('name', this.loggedUser.name);
      //         localStorage.setItem('password', this.loggedUser.pass);
      //         this.router.navigateByUrl('/home');
      //       }
      //     }
      //   },
      //   (error) => {
      //     alert('user not found !');
      //   }
      // );
    } else {
      Object.keys(this.loginForm.controls).forEach((key) => {
        this.loginForm.get(key).markAsDirty();
      });
      //  this.loginForm.markAsDirty();
    }
  }

  submitRegisterForm() {
    if (this.registerForm.valid) {
    } else {
      Object.keys(this.registerForm.controls).forEach((key) => {
        this.registerForm.get(key).markAsDirty();
      });
    }
  }
  toggleTab() {
    console.log('tttt');
    this.ngOnInit();
  }
  showLoginPassword() {
    this.isShowLoginPassword = !this.isShowLoginPassword;
    if (this.loginPassType === 'password') {
      this.loginPassType = 'text';
    } else {
      this.loginPassType = 'password';
    }
  }
  showRegisterPassword() {
    this.isShowRegisterPassword = !this.isShowRegisterPassword;
    if (this.registerPassType === 'password') {
      this.registerPassType = 'text';
    } else {
      this.registerPassType = 'password';
    }
  }
  showRegisterConfirmassword() {
    this.isShowRegisterConfirmPassword = !this.isShowRegisterConfirmPassword;
    if (this.registerConfirmPassType === 'password') {
      this.registerConfirmPassType = 'text';
    } else {
      this.registerConfirmPassType = 'password';
    }
  }
}
