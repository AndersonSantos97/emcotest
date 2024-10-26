import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideHttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './createUser/createUser.component';
import { AsigTaskComponent } from './asig-task/asig-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    CreateUserComponent,
    AsigTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(),
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
