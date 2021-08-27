import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAppModuleModule } from './main-app-module/main-app-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainAppModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
