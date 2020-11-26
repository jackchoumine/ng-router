/*
 * @Description: 根组件
 * @Date: 2020-11-27 00:54:02 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-27 03:15:47 +0800
 * @LastEditors: JackChouMine
 */
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // NOTE 注入路由
  constructor(private router: Router){

  }
  toProduct(): void{
    console.log('去到商品详情')
    this.router.navigate(['/product'])
    console.log(this.router)
  }
}

