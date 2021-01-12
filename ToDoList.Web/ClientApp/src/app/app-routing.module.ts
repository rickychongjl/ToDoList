import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './shared/services/auth/auth-guard.service';
import { SignUpComponent } from './account/sign-up/sign-up.component';
import { AccountModule } from './account/account.module';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountModule,
    DashboardModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
