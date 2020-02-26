import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [UsersComponent, ProfileComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
