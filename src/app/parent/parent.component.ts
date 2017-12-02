import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ChangeDetectorRef  } from '@angular/core';

import { ChildComponent } from '../child/child.component'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  logs = [ 'foo', 'bar', 'baz' ];
  count = 0;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
  }
  
  @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;
  
  // 子コンポーネントの初期化後に実行
  ngAfterViewInit() {
    this.count = this.children.length;
    this.ref.detectChanges();
  }

}
