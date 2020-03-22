import { AbstractControl } from '@angular/forms';

export const PasswordMatcher = (c: AbstractControl): { [key: string]: boolean} | null => {
  const passwordControl = c.get('password');
  const confirmControl = c.get('confirmPassword');

  if (passwordControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (passwordControl.value === confirmControl.value) {
    return null;
  }

  return { 'match': true };
}
