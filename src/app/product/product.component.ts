/*
 * @Description: 商品组件
 * @Date: 2020-11-27 02:32:40 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-27 04:27:54 +0800
 * @LastEditors: JackChouMine
 */
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

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
    // NOTE 使用路由快照获取参数，路由参数变化，但是组件没有渲染
    // this.productName = this.activeRoute.snapshot.params.productName
    this.productId = this.activeRoute.snapshot.queryParams.id
    // NOTE 使用参数订阅获取path参数
    this.activeRoute.params.subscribe((params: Params ) => {
      console.log(params)
      this.productName = params.productName
    })
    // NOTE 获取查询参数
    this.activeRoute.queryParams.subscribe( query => {
      console.log(query)
      this.productId = query.productId
    })
  }
}
