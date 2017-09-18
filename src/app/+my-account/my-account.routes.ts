import { MyAccountComponent } from './my-account.component';

export const routes = [
  { path: '', children: [
    { path: '', component: MyAccountComponent },
    { path: 'login-my-account', loadChildren: './+login-my-account#LoginMyAccountModule' },
    { path: 'forgot-my-account', loadChildren: './+forgot-my-account#ForgotMyAccountModule' },
    { path: 'register-my-account', loadChildren: './+register-my-account#RegisterMyAccountModule' }
  ]},
];
