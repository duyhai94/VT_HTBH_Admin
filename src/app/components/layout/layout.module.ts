import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponentModule } from '../header/header-component.module';
import { NavComponentModule } from '../nav/nav-menu.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    HeaderComponentModule,
    RouterModule,
    NavComponentModule,
  ],

  exports: [MainLayoutComponent, AuthLayoutComponent],
})
export class LayoutModule {}
