import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideHttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './createUser/createUser.component';
import { AsigTaskComponent } from './asig-task/asig-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    CreateUserComponent,
    AsigTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideHttpClient(),
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
