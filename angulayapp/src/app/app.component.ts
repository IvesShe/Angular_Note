import { Component } from '@angular/core';
import axios from 'axios';
import { IvesappService } from './service/ivesapp.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angulayapp';
  stockList = [{ stockName: '', stockCode: '' }];
  superStocks = [{ stockName: '', stockCode: '' }];

  // constructor(public stockSer:StockListService){
  constructor(public ivesSer: IvesappService) {
    console.log("@@@AppComponent constructor ivesSer", ivesSer)
    // let httpUrl = 'http://localhost:8080/stocklist'
    // axios.get(httpUrl).then((res) => {
    //   console.log("@@@res.data", res.data)
    //   this.stockList = res.data.stocklist
    //   console.log("@@@this.stockList", this.stockList)
    // })
    ivesSer.getAllStocks().then(res => {
      this.stockList = res
    })
    console.log("@@@this.stockList", this.stockList)
  }

  name = 'ives';
  sum(a: number, b: number) {
    return a + b;
  };
  classStr = 'bgBlue active';
  msg = "ives888";
  htmlStr = "<span>hello HTML<script>location.href='http://www.baidu.com'</script></span>";
  classObj = {
    bgBlue: true,
    active: true
  };
  isShow = true;
  username = 'ives';
  password = '111111';
  clickFn() {
    console.log("@@@username", this.username, this.password)
  }
  getContent(input1: any, input2: any) {
    console.log("@@@input", input1, input2)
  }
  eventFn(obj: any) {
    console.log("@@@eventFn", obj)
  }
  username2 = 'ives222';
  password2 = '111111222';
  sendchildMsg = 'toChild-1111-55555';
  getChildMsg = "";
  getEvent(event: any) {
    console.log("@@@getEvent", event)
  }

  ngOnChanges() {
    console.log("@@@ngOnChanges")
  }

  ngOnInit() {
    console.log("@@@ngOnInit")
  }

  ngDoCheck() {
    console.log("@@@ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("@@@ngAfterContentInit")
  }

  ngAfterContentChecked() {
    console.log("@@@ngAfterContentChecked")
  }

  ngAfterViewInit() {
    console.log("@@@ngAfterViewInit")
  }

  ngAfterViewChecked() {
    console.log("@@@ngAfterViewChecked")
  }

  ngOnDestory() {
    console.log("@@@ngOnDestory")
  }

  async stockFn() {
    console.log("@@@stockFn")

    let allStocks = await this.ivesSer.superStocks()
    this.superStocks = allStocks
  }
}
