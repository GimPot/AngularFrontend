import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSignUpComponent} from './components/user-sign-up/user-sign-up.component';

const routes: Routes = [
  { path: 'users/signup', component: UserSignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
