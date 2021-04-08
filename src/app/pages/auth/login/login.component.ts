import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
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
        username: 'adminseller@viettin.com',
        password: 'Admin@12345',
      })
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/main']);
      });
  }
  routeTo(e) {
    console.log(e);
  }
}
