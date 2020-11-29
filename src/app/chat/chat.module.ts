/*
 * @Description: 聊天模块
 * @Date: 2020-11-28 19:47:17 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-28 20:11:48 +0800
 * @LastEditors: JackChouMine
 */

import { NgModule } from '@angular/core'
import { ChatRoutingModule } from './chat-routing.module'
import { ChatComponent } from './chat.component'

@NgModule({
  declarations: [ChatComponent],
  imports: [ChatRoutingModule], // 提供路由模块，否则不知道导航到哪儿
})
export class ChatModule { }
