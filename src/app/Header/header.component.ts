import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private localStorage: LocalStorage) {}

  public isMobileNavBar: boolean;

  ngOnInit(): void {
    this.isMobileNavBar = false;
  }

  showMobNavBar(): void {
    this.isMobileNavBar = !this.isMobileNavBar;
  }

  logout(): void {
    if (confirm('Are you sure ? ')) {
      localStorage.clear();
      this.router.navigate(['/login']);
    }

    // swal({
    //   text: 'Are you sure ?',
    //   buttons: ['No', 'Yes, Logout'],
    // }).then((result) => {
    //   if (result) {
    //     localStorage.clear();
    //     this.router.navigate(['/login']);
    //     swal('Logout Success !', {
    //       timer: 3000,
    //     });
    //   }
    // });
  }

  goHome(): void {
    // this.router.navigateByUrl('/home');
  }

  goProfile(): void {
    // this.router.navigateByUrl('/profile');
  }

  goSettings(): void {
    // this.router.navigateByUrl('/settings');
  }
}
