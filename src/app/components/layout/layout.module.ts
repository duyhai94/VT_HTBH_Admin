import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent, AuthLayoutComponent],
  imports: [CommonModule],

  exports: [MainLayoutComponent, AuthLayoutComponent],
})
export class LayoutModule {}
