/*
 * @Description:
 * @Date: 2020-11-27 01:54:14 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-28 01:50:24 +0800
 * @LastEditors: JackChouMine
 */
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from '../model/product'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productName: string
  productId: number
  constructor(private route: ActivatedRoute) {
    console.log('home 构造函数')
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: {product: Product} ) => {
      console.log(data)
      console.log(data.product)
      const {productId, productName} = data.product
      this.productId = productId
      this.productName = productName
    })
    console.log('home')
  }
}
