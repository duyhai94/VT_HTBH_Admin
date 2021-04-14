import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements OnInit {
  @Input() dataHeaderInfo;

  constructor( private local : LocalStorageService,
                private route : Router ) {}

  ngOnInit(): void {}

  btnLogout() {
    this.local.clear();
    this.route.navigate([''])
  }


}
