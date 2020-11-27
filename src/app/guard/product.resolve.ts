
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router'
import { Product } from '../model/product'

// NOTE 加上注入修饰符，当在组件类中注入路由时，没有加该修饰符，是因为 Component 装饰器，已经继承了它
@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Promise<Product> {
    const productId: number = route.params.id
    console.log('路由解析守卫')
    if (!productId) {
      // 判断时正确的 id 向服务器请求数据
      return new Product(1, 'iPhone7')
    }else {
      // 数据不正确，跳转
      this.router.navigate(['/product', 'mac'])
    }
  }
}

