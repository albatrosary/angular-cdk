import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {

  @Input() log: string;
  @Input() index: number;
  
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  
  ngOnDestroy() {
    console.log('child ngOnDestroy => ', this.log);
  }
  
  delete() {
    this.onDelete.emit(this.index);
  }

}
