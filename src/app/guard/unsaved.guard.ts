/*
 * @Description:
 * @Date: 2020-11-28 00:39:21 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-28 00:52:17 +0800
 * @LastEditors: JackChouMine
 */
import { CanDeactivate } from '@angular/router'
import { ProductComponent } from '../product/product.component'
export  class UnsavedGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent): boolean {
    return window.confirm('你确定要离开吗？')
  }
}
