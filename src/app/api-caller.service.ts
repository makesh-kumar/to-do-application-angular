import { ISignup } from './Model/signup';
import { ITododata } from './Model/Tododata';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
// import { ILoginData } from './Model/login-data';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiCallerService {
  baseUrl: string;
  constructor(private http: HttpClient, private router: Router) {
    this.baseUrl = 'https://mydemoapi.herokuapp.com';
    // this.baseUrl = 'http://localhost:8080'
  }

  //  headers;
  // setHttpHeader()
  // {
  //  this.headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json');
  // let options = this.headers: headers: any;
  // return options;}

  // To handle the http error response
  handleErr = (error: HttpErrorResponse) => {
    if (error.status === 0) {
      this.router.navigate(['error']);
    }
    if (error.status === 200) {
    }
    return throwError(error.status);
    // return throwError(error.status);
  };

  public getCovidResult() {
    return this.http
      .get('https://corona.lmao.ninja/v2/countries')
      .pipe(catchError(this.handleErr));
  }

  public getData(userId: string): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + '/getData/' + userId)
      .pipe(catchError(this.handleErr));
  }

  public addData(data: ITododata) {
    return this.http
      .post<ITododata>(this.baseUrl + '/addData', data)
      .pipe(catchError(this.handleErr));
  }

  // public login(data: ILoginData ){
  // //

  //   return this.http.post<ILoginData>(this.baseUrl + '/login', data).pipe(
  //     catchError(
  //       this.handleErr
  //     )
  //   );
  // }

  public isUser(email: string) {
    return this.http
      .get<ISignup>(this.baseUrl + '/isUser/' + email)
      .pipe(catchError(this.handleErr));
  }

  public updateProfile(s: ISignup) {
    return this.http
      .post<ISignup>(this.baseUrl + '/updateProfile', s)
      .pipe(catchError(this.handleErr));
  }
  public changePassword(s: ISignup) {
    return this.http
      .post<ISignup>(this.baseUrl + '/changePassword', s)
      .pipe(catchError(this.handleErr));
  }

  public getDict(word: string): Observable<any> {
    return this.http
      .get<any>(
        'https://dictionaryapi.com/api/v3/references/thesaurus/json/' +
          word +
          '?key=9cce3a89-5ff5-4b47-8312-261a840929ec'
      )
      .pipe(catchError(this.handleErr));
  }

  public getMovieList(word: string): Observable<any> {
    return this.http
      .get<any>('http://www.omdbapi.com/?apikey=65b53502&s=' + word)
      .pipe(catchError(this.handleErr));
  }

  public getMovie(word: string): Observable<any> {
    return this.http
      .get<any>('http://www.omdbapi.com/?apikey=65b53502&i=' + word)
      .pipe(catchError(this.handleErr));
  }

  // return this.http.get<AdminOutbox[]>(this.baseUrl + '/getAdminOutbox', { headers }).pipe(
  //   catchError(
  //     this.handleErr
  //   )
  // );

  public sign(data: ISignup) {
    return this.http
      .post<ISignup>(this.baseUrl + '/signUp', data)
      .pipe(catchError(this.handleErr));
  }
  public deleteData(data: ITododata) {
    return this.http
      .post<ITododata>(this.baseUrl + '/deleteData', data)
      .pipe(catchError(this.handleErr));
  }

  // public getAllPlayer(name: string): Observable<any>{
  //   return this.http.get<any>('https://cricapi.com/api/playerFinder?apikey=0iGk3p0W8XZzlDPqE3qnzie5HYT2&name='+name);
  // }

  public getNews(): Observable<any> {
    return this.http.get<any>(
      'http://newsapi.org/v2/top-headlines?country=in&apiKey=072b62dc3937448f97f96d362878e22d'
    );
  }

  public getNews2(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + '/getNews')
      .pipe(catchError(this.handleErr));
  }

  public getNewsOf(cat: string): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + '/getNewsOf/' + cat)
      .pipe(catchError(this.handleErr));
  }

  public getAllPlayer(name: string): Observable<any> {
    return this.http.get<any>(
      'https://cricapi.com/api/playerFinder?apikey=0iGk3p0W8XZzlDPqE3qnzie5HYT2&name=' +
        name
    );
  }

  public getOnePlayer(id: string): Observable<any> {
    return this.http.get<any>(
      'https://cricapi.com/api/playerStats?apikey=0iGk3p0W8XZzlDPqE3qnzie5HYT2&pid=' +
        id
    );
  }

  // public addData(id: number, name: string, dept: string){
  //   console.log('addedd');
  //   return this.http.post<any>('https://mydemoapi.herokuapp.com/add/'+id+'/'+name+'/'+'dept',null);
  //   // console.log('addedd');
  // }
}
