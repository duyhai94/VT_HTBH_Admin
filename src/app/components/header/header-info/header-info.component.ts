import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileModel } from 'src/app/models/profile/profile.model';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements OnInit {
  @Input() dataHeaderInfo;
  profile: Observable<ProfileModel>;
  constructor( private local : LocalStorageService,
    private route: Router,
    private profileService: ProfileService) { }

  ngOnInit(): void {
   this.getProfile()
    
  }

  btnLogout() {
    this.local.clear();
    this.route.navigate([''])
  }
  getProfile() {
    this.profile = this.profileService.get('').pipe(map((res : any) => {
      return res.data
    }))
    
  }

}
