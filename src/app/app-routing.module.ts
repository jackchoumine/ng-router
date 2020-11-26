/*
 * @Description: 路由模块
 * @Date: 2020-11-27 00:54:02 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-27 03:02:21 +0800
 * @LastEditors: JackChouMine
 */
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ProductComponent } from './product/product.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product', // NOTE 不能以 / 开头
    component: ProductComponent,
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
