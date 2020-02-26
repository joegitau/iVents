import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PasswordMatcher } from '../utils/passwordMatcher';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userProfile = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.required]],
      passwordGroup: this.fb.group({
                      password: ['', [Validators.required, Validators.minLength(5)]],
                      confirmPassword: ['', [Validators.required]]
                      }, {validator: PasswordMatcher})
    })
  }

  saveProfile() {
    return true
  }

  cancelEditProfile() {
    return this.router.navigate(['./']);
  }

}
