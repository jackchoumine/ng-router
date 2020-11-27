/*
 * @Description: 路由模块
 * @Date: 2020-11-27 00:54:02 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-28 01:38:45 +0800
 * @LastEditors: JackChouMine
 */
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ChatComponent } from './chat/chat.component'
import { ChildAComponent } from './child-a/child-a.component'
import { ChildBComponent } from './child-b/child-b.component'
import { LoginGuard } from './guard/login.guard'
import { ProductResolve } from './guard/product.resolve'
import { UnsavedGuard } from './guard/unsaved.guard'
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
    resolve: {product: ProductResolve},
    data: {tech: 'angular'},
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
    canActivate: [LoginGuard], // NOTE 添加路由守卫，可添加多个，只有其中一个守卫返回 false，路由请求被拒绝
    canDeactivate: [UnsavedGuard],
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
  providers: [LoginGuard, UnsavedGuard, ProductResolve], // NOTE 在此添加守卫的原因是啥
})
export class AppRoutingModule { }
