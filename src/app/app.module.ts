/*
 * @Description: 根模块
 * @Date: 2020-11-27 00:54:02 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-27 01:28:50 +0800
 * @LastEditors: JackChouMine
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
