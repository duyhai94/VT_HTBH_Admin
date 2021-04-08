import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit, OnChanges {
  @Input() loginFormData;
  @Input() loginFormTitle;
  @Input() btnTitle = 'Đăng nhập';
  @Input() numberCol = [];
  @Output() onSubmit = new EventEmitter();
  @Output() onForgotPW = new EventEmitter();

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() {}

  listLabelSub = [];
  ngOnChanges() {
    
  }
  ngOnInit(): void {}
  submit() {
    this.onSubmit.emit(this.form.value);
  }
}

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [LoginFormComponent],
})
export class LoginFormMudule {}
