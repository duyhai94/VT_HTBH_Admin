import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
 
  data = {
    type: {
      phone : 'phone',
    }
   }
  constructor() {}

  ngOnInit(): void {}
  forgot(ev){
    console.log(ev);

  }
  routeTo(e) {
    console.log(e);
  }

}
