import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private authService: AuthenticationService
  ) {}
  data = {
    type: {
      phone: 'phone',
      password: 'password',
    },
  };
  ngOnInit(): void {}

  login(ev) {
    this.authService
      .create({
        username: '84963712001',
        password: '864068',
      })
      .subscribe(
        (res) => {
          console.log(res);
          this.localStorage.set(' ', 'access_token');
          this.router.navigate(['employee']);
        },
        (err) => {
          alert(err.message);
        }
      );
  }
  routeTo(e) {
    console.log(e);
  }
}
