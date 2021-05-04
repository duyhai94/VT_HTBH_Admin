import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OTPModel } from 'src/app/models/auth/auth.model';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {

  toast: any;
  success: any;
  phone: any;
  constructor(private authService: AuthenticationService,
    private router: Router) { }
 
  ngOnInit(): void {}
  forgot(){
    let otp: OTPModel = {
      PhoneNumber: this.phone,
      otpType: 3
  }   
    this.authService.getOTP(otp).subscribe(
      (res: any) => {
        this.success = res.message
        this.router.navigate(['otp']), {
          // state: {
          //   data: otp
          // }
        }
        console.log(this.success);
        

      }
      , (err) => {
      this.toast = err.error.message
      console.log(this.toast);
      
    })
    
    

  }
  // routeTo(e) {
  //   console.log(e);
  // }

}
