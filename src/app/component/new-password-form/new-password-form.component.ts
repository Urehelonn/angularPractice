import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-new-password-form',
  templateUrl: './new-password-form.component.html',
  styleUrls: ['./new-password-form.component.css']
})
export class NewPasswordFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPass: ['', Validators.required,
    PasswordValidators.validOldPassword],
      newPass: ['', Validators.required],
      passConf: ['', Validators.required]
    },{
    validator: PasswordValidators.passwordMatch
    });
  }

  get oldPass(){
    return this.form.get('oldPass');
  }
  get newPass(){
    return this.form.get('newPass');
  }
  get passConf(){
    return this.form.get('passConf');
  }
}
