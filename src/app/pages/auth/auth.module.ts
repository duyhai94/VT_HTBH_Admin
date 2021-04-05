import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';
import { AuthComponent } from './auth.component';
import { authRoutes } from './auth.routes';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AuthComponent,LoginComponent, LoginFormComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  //   bootstrap: [AppComponent],
})
export class AuthModule {}
