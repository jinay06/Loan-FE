import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './module/core/components/signup/signup.component';
import { LoginComponent } from './module/core/components/login/login.component';
import { HomeComponent } from './module/feature/home/home.component';
import { BlogcompoComponent } from './module/feature/blogcompo/blogcompo.component';

const routes: Routes = [
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'blog', component: BlogcompoComponent
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
