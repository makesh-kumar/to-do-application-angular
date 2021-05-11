import { Component, OnInit } from '@angular/core';
import swal from 'Sweetalert';
import { Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-practise-home',
  templateUrl: './practise-home.component.html',
  styleUrls: ['./practise-home.component.css']
})
export class PractiseHomeComponent implements OnInit {

  constructor(private router: Router,private localStorage: LocalStorage) { }
show_nav: boolean;
  ngOnInit(): void {
    this.show_nav = false;
  }
  show(){
    this.show_nav = !this.show_nav
  }
logout(){


  swal({
    // buttons: {
    //   cancel: true,
    //   confirm: true,
    // },
    text: 'Are you sure ?',

    // icon: 'warning',
// buttons: {
//       cancel: true,
//       confirm: true,
//       // confirm: 'Yes, Logout !',
//     },
buttons: ["No", "Yes, Logout"],

  }).then((result) => {


    if (result) {

      // this.logServ.logout();
      localStorage.clear();
      this.router.navigate(['/login']);


      swal("Logout Success !", {

        timer: 3000,

      });
    }
    // else if (result.dismiss === swal.DismissReason.cancel) {

    // }

  });
//     console.log('BEFROR'+localStorage.length);
// localStorage.clear();

// console.log('Aftrr'+localStorage.length);
// this.router.navigateByUrl('/login');
}
goHome(){
  this.router.navigateByUrl('/home');
}
goProfile(){
  this.router.navigateByUrl('/profile');
}
goSettings(){
  this.router.navigateByUrl('/settings');
}
}
