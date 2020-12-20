import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component'
import { FormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { AuthFormComponent } from './shared/components/auth-form/auth-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
