import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BaseButtonModule } from '../../button/base-button/base-button.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  @Input() formGroup;
  form = new FormGroup({
    OldPassword: new FormControl(''),
    NewPassword: new FormControl(''),
    ConfirmPassword : new FormControl('')
  });

  dataBtnSC = {
    cssClass: 'btn-sc'
  }

  dataBtnCancel = {
    cssClass: 'btn-cancel'
  }



  constructor(
    public dialoRef: MatDialogRef<ChangePasswordComponent>, ) { }

  ngOnInit(): void {
  }
  close() {
    this.dialoRef.close()
    
  }
  change(){}

  submit(){}
}
@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,BaseButtonModule],
  exports: [ChangePasswordComponent]
})
export class ChangePasswordModule{}