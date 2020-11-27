/*
 * @Description: 路由模块
 * @Date: 2020-11-27 00:54:02 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-27 23:56:35 +0800
 * @LastEditors: JackChouMine
 */
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ChatComponent } from './chat/chat.component'
import { ChildAComponent } from './child-a/child-a.component'
import { ChildBComponent } from './child-b/child-b.component'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ProductComponent } from './product/product.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // 没有，会报错
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
    outlet: 'aux', // NOTE 指定路由出口
  },
  {
    path: 'product/:productName', // NOTE 不能以 / 开头
    data: {name: 'jack', age: 26},
    component: ProductComponent,
    children: [
    {
        path: '',
        component: ChildAComponent,
    },
    {
        path: 'child-b/:child-id',
        component: ChildBComponent,
    },
  ],
  },
  {
    path: '**',
    component: NotFoundComponent, // NOTE 404 路由，必须放在最后
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
