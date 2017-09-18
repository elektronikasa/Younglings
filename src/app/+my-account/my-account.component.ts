import {
  Component,
  OnInit,
} from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`My Account` component loaded asynchronously');

@Component({
  selector: 'my-account',
  template: `
    <h1>Hello from My Account</h1>
    <span>
      <a [routerLink]=" ['./forgot-my-account'] ">
        Forgot Password
      </a>
      <br />
      <a [routerLink]=" ['./login-my-account'] ">
        login
      </a>
      <br />
      <a [routerLink]=" ['./register-my-account'] ">
        register
      </a>
    </span>
    <router-outlet></router-outlet>
  `,
})
export class MyAccountComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `My Account` component');
  }

}
