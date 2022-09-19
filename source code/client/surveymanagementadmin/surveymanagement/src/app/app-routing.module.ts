import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatesurveyComponent } from './components/createsurvey/createsurvey.component';
import { HomeComponent } from './components/home/home.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{path:"",component:LoginComponent,pathMatch:"full"},
{path:"home",component:HomeComponent,pathMatch:"full"},
{path:"login",component:LoginComponent,pathMatch:"full"},
{path:"listuser",component:ListuserComponent},
{path:"createsurvey",component:CreatesurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
