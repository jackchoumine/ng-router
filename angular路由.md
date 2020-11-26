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

```html
<div>
  <!-- routerLink 的值是一个数组，可传递参数 -->
  <a [routerLink]="['/']">主页</a>
  <a [routerLink]="['/product']">商品详情</a>
  <button (click)="toProduct()">商品详情</button>
  <router-outlet></router-outlet>
</div>
```
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

