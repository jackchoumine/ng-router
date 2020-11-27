/*
 * @Description:
 * @Date: 2020-11-27 22:32:44 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-11-27 23:19:02 +0800
 * @LastEditors: JackChouMine
 */
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss'],
})
export class ChildBComponent implements OnInit {
  key: string
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(query => {
      console.log('子组件B')
      console.log(query)
      this.key = query.key
    })
  }

}
