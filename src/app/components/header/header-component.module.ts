import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';

@NgModule({
  declarations: [HeaderLogoComponent, HeaderInfoComponent],
  imports: [CommonModule],

  exports: [HeaderLogoComponent, HeaderInfoComponent],
})
export class HeaderComponentModule {}
