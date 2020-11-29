/*
 * @Description: home 路由模块
 * @Date: 2020-11-28 17:59:29 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-29 21:45:05 +0800
 * @LastEditors: JackChouMine
 */
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductResolve } from '../guard/product.resolve'
import { HomeComponent } from './home.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'childHome',
  },
  {
    path: 'childHome',
    resolve: { product: ProductResolve },
    data: { tech: 'angular' },
    component: HomeComponent,
    children: [], // NOTE 还可以设置子路由
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)], // 使用 forChild() 方法，因为不是主模块。
  providers: [ProductResolve], // NOTE 在此添加守卫的原因是啥
})
export class HomeRoutingModule { }
