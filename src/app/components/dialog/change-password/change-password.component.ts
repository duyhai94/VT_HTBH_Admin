import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ChangeModel } from 'src/app/models/auth/change.model';
import { AuthenticationService } from 'src/app/services/auth.service';
import { BaseButtonModule } from '../../button/base-button/base-button.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {

  form = new FormGroup({
    OldPassword: new FormControl(''),
    NewPassword: new FormControl(''),
    ConfirmPassword: new FormControl('')
  }
  )


  // dataBtnSC = {
  //   cssClass: 'btn-sc',
  // };

  // dataBtnCancel = {
  //   cssClass: 'btn-cancel',
  // };

  constructor(
    public dialoRef: MatDialogRef<ChangePasswordComponent>,
    private authenService: AuthenticationService
  ) {}

  ngOnInit() {
  }
  close() {
    this.dialoRef.close();
  }
  change() {
    this.authenService.create(this.form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  submit() {}
}
@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BaseButtonModule],
  exports: [ChangePasswordComponent],
})
export class ChangePasswordModule {}
