import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './forgot-my-account.routes';
import { ForgotMyAccountComponent } from './forgot-my-account.component';

console.log('`Forgot Password` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ForgotMyAccountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ForgotMyAccountModule {
  public static routes = routes;
}
