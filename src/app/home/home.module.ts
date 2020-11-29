/*
 * @Description: home 模块
 * @Date: 2020-11-28 17:57:13 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-28 19:43:08 +0800
 * @LastEditors: JackChouMine
 */

import { NgModule } from '@angular/core'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule],
})

export class HomeModule { }
