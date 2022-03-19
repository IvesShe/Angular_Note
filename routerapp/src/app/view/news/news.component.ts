import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  title = ""
  constructor(public route: ActivatedRoute, public router: Router) {
    console.log("@@@NewsComponent", this)
    console.log("@@@NewsComponent route", route)
    console.log("@@@NewsComponent router", router)
  }

  ngOnInit(): void {
    // console.log("@@@NewsComponent ngOnInit", this)
    // console.log("@@@NewsComponent params", this.route.params)
  }

  goParams() {
    let params: any = this.route.params
    console.log("@@@NewsComponent goParams", params)
    this.title = params.value.id

    // this.route.params.subscribe((params2) => {
    //   console.log("@@@subscribe", params2.id)
    // })
  }

  goHome() {
    console.log("@@@goHome")

    this.router.navigate([''], {
      queryParams: {
        username: 'admin'
      },
      fragment: "ives",
      replaceUrl: true,
    })
  }
}
