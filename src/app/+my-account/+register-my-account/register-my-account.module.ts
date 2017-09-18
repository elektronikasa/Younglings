import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './register-my-account.routes';
import { RegisterMyAccountComponent } from './register-my-account.component';

console.log('`Register` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    RegisterMyAccountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class RegisterMyAccountModule {
  public static routes = routes;
}
