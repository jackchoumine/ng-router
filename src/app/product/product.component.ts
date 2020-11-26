/*
 * @Description: 商品组件
 * @Date: 2020-11-27 02:32:40 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-27 03:45:30 +0800
 * @LastEditors: JackChouMine
 */
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productId: number // TODO  声明在构造函数中，报错
  productName: string
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activeRoute)
    // NOTE 使用路由快照获取参数
    this.productName = this.activeRoute.snapshot.params.productName
    this.productId = this.activeRoute.snapshot.queryParams.id
    //
  }
}
