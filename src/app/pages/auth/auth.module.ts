import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { AuthComponent } from './auth.component';
import { authRoutes } from './auth.routes';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, RouterModule.forChild(authRoutes), LayoutModule],
  providers: [],
  //   bootstrap: [AppComponent],
})
export class AuthModule {}
