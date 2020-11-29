/*
 * @Description: 根模块
 * @Date: 2020-11-27 00:54:02 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-28 20:35:58 +0800
 * @LastEditors: JackChouMine
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductComponent } from './product/product.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ChildAComponent } from './child-a/child-a.component'
import { ChildBComponent } from './child-b/child-b.component'
@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent, // NOTE Home 通过异步加载的，可不声明了
    ProductComponent,
    NotFoundComponent,
    ChildAComponent,
    ChildBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // 使用路由模块
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
