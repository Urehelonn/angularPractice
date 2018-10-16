import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
  static validOldPassword(control: AbstractControl) {
    return new Promise(resolve => {
      if (control.value !== '1234') resolve({ invalidOldPassword: true });
      else resolve(null);
    });
  }

  static passwordMatch(control: AbstractControl) {
    let newPass = control.get('newPass');
    let passConf = control.get('passConf');
    if (newPass !== passConf) {
      return { passwordNotMatch: true };
    }
    return null;
  }
}
