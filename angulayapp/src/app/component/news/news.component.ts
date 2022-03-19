import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  msg = '這是新聞內容'
  constructor() { }

  ngOnInit(): void {
  }

}
