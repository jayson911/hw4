import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentComponent } from './component/component.component';
import { AllUsersComponentComponent } from './all-users-component/all-users-component.component';
import { AllUsersComponentsComponent } from './components/all-users-components/all-users-components.component';
import { AllUsersComponent } from './components/all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    AllUsersComponentComponent,
    AllUsersComponentsComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AllUsersComponentComponent, AllUsersComponentsComponent, AllUsersComponent]
})
export class AppModule { }
