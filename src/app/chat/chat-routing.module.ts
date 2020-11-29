/*
 * @Description: Chat 路由模块
 * @Date: 2020-11-28 19:45:21 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-28 19:52:09 +0800
 * @LastEditors: JackChouMine
 */
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ChatComponent } from './chat.component'

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ChatRoutingModule { }
