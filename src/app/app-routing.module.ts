import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { AuthGuard } from './auth.guard';
import { CreateUserComponent } from './createUser/createUser.component';
import { AsigTaskComponent } from './asig-task/asig-task.component';
import { AdminGuard } from './admin-guard.guard';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path: 'panel',component:PanelComponent, canActivate:[AuthGuard]},
  {path: 'createUser',component:CreateUserComponent, canActivate:[AuthGuard, AdminGuard]},
  {path: 'asigtask',component:AsigTaskComponent, canActivate:[AuthGuard, AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
