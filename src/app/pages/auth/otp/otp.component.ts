import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  otp: any;
  data: any;
  constructor(private router: Router) {
    // this.data = this.router.getCurrentNavigation().extras.state.data;
    // console.log(this.data);
    

  }

  ngOnInit(): void {
  }
  forgot(){}
}
