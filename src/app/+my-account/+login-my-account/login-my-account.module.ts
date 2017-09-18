import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './login-my-account.routes';
import { LoginMyAccountComponent } from './login-my-account.component';

console.log('`Login` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    LoginMyAccountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginMyAccountModule {
  public static routes = routes;
}
