# angular 路由

和路由相关的对象：

| 名称           | 介绍                                                                     |     |
| -------------- | ------------------------------------------------------------------------ | --- |
| Routes         | 路由配置，保存着 path 和 组件的对应关系，以及 RouterOutlet 路由出口。    |     |
| RouterOutlet   | 路由出口：激活的路由对应的组件的渲染位置。                               |     |
| Router         | 路由对象，可通过调用其`navigate` 和`navigateByUrl`来进行路由跳转等操作。 |     |
| RouterLink     | 模板中的路由导航指令，往往用在 a 标签上。                                |     |
| ActivatedRoute | 当前激活的路径，保存着当前路由信息：路由地址、路由参数等。               |     |

## 路由配置

```ts
[
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full", // 没有，会报错
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "product/:productName", // NOTE 不能以 / 开头
    data: { name: "jack", age: 26 },
    component: ProductComponent, // NOTE 在父路由的组件中提供路由出口
    children: [
      {
        path: "", // NOTE 第一个子路由不设置具体的路径，默认显示它
        component: ChildAComponent,
      },
      {
        path: "child-b/:child-id",
        component: ChildBComponent,
      },
    ],
  },
  {
    path: "**",
    component: NotFoundComponent, // NOTE 404 路由，必须放在最后
  },
];
```

```html
<div>
  <!-- routerLink 的值是一个数组，可传递参数 -->
  <a [routerLink]="['/']">主页</a>
  <a [routerLink]="['/product']">商品详情</a>
  <button (click)="toProduct()">商品详情</button>
  <router-outlet></router-outlet>
</div>
```

`ProductComponent` 组件的模板:

```html
<div>
  <p>product组件</p>
  <p>商品id：{{productId}}</p>
  <p>上屏名字：{{productName}}</p>
  <a [routerLink]="['./']">第一个子路由</a>
  <a [routerLink]="['./child-b','child-id-333']" [queryParams]="{key:'myKey'}">
    第二个子路由
  </a>
  <router-outlet></router-outlet>
</div>
```

## 辅助路由

```ts
  {
    path: 'chat',
    component: ChatComponent,
    outlet: 'aux', // NOTE 指定路由出口
  },
```

根组件的模板：

```html
<a [routerLink]="[{outlets:{aux:'chat'}}]">开始聊天</a>
<a [routerLink]="[{outlets:{aux:null}}]">结束聊天</a>
<div>
  <router-outlet></router-outlet>
  <!-- 指定路由出口的名字 -->
  <router-outlet name="aux"></router-outlet>
</div>
```

chat 组件占 30%的宽度：

```scss
.chat {
  background-color: lightgreen;
  height: 400px;
  width: 30%;
  float: left;
  box-sizing: border-box;
}
```

点击开始聊天和结束聊天，聊天窗口会显示，而右侧不变。
如果希望，显示聊天窗口时，右侧回到主页，需要给聊天路径指定基本路径：

```html
<a [routerLink]="[{outlets:{aux:'chat',primary:'home'}}]">开始聊天</a>
```

<!-- TODO -->

辅助路由传递参数？？

## 路由导航

## 路由传参

三种传递方式：

1. 查询字符串

```bash
path:'/path?id=1'
ActivatedRoute.queryParams[id]
```

2. path 变量传参

```bash
path:'/path/:id' => /path/1
ActivatedRoute.params[id]
```

3. 路由对象 data 传递参数

```bash
  {
    path: '',
    data:[{key:value}],# 数组
    component: HomeComponent,
  }
```

组件中获取参数：

```bash
ActivatedRoute.data
```

## 路由守卫

路由守卫的使用场景：

- 当用户满足某个条件时，才能进入某个路由；
- 只有在用户在填写完成要求的表单时，才能导航到一下个路由；
- 填写表单，未进行保存操作，就离开页面，需要提醒用户。

在用户进入或者离开某个路由时可执行的一些函数叫路由守卫。

进入路由前：
`CanActivate`:
路由激活前：
`Resolve`: 在路由激活前获取路由数据。
离开路由：
`CanDeactivate`:

只有在用户登录后才能看到产品，可给产品路由添加 `CanActivate` 守卫。

```ts
import { CanActivate } from "@angular/router";
export class LoginGuard implements CanActivate {
  // NOTE ng 会根据返回值是否通过路由请求
  canActivate(): boolean {
    const logged: boolean = Math.random() <= 0.5;
    if (logged) {
      console.log("用户已经登录");
    } else {
      console.log("用户未登录");
    }
    return logged;
  }
}
```

```ts
  {
    path: 'product/:productName',
    component: ProductComponent,
    canActivate: [LoginGuard], // NOTE 添加路由守卫，可添加多个，只有其中一个守卫返回 false，路由请求被拒绝
  },
```

把路由守卫添加为供应商：

```ts
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard], // NOTE 在此添加守卫的原因是啥
})
```
