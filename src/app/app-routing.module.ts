/*
 * @Description: 路由模块
 * @Date: 2020-11-27 00:54:02 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-27 02:35:45 +0800
 * @LastEditors: JackChouMine
 */
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
