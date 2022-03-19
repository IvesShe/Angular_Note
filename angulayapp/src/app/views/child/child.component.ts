import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {
  @Input() item: string = '555';
  @Output() childMsg = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendMsg() {
    console.log("@@@sendMsg")
    this.childMsg.emit({ msg: '這是子組件' });
  }
}
