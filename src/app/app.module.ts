/*
 * @Description: 根模块
 * @Date: 2020-11-27 00:54:02 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-27 02:24:58 +0800
 * @LastEditors: JackChouMine
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ProductComponent } from './product/product.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChatComponent } from './chat/chat.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    NotFoundComponent,
    ChildAComponent,
    ChildBComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
