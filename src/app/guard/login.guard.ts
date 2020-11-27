/*
 * @Description:
 * @Date: 2020-11-28 00:20:56 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-28 00:36:20 +0800
 * @LastEditors: JackChouMine
 */
import {  CanActivate } from '@angular/router'
export class LoginGuard implements CanActivate {
   // tslint:disable-next-line: max-line-length
  //  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //    throw new Error('Method not implemented.')
  //  }
  // NOTE ng 会根据返回值是否通过路由请求
   canActivate(): boolean  {
     const logged: boolean = Math.random() <= 0.5
     if (logged){
       console.log('用户已经登录')
      }else {
        console.log('用户未登录')
     }
     return logged
   }
 }
