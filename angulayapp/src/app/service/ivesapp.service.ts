import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class IvesappService {

  constructor() { }

  async getAllStocks() {
    console.log("@@@getAllStocks")
    let httpUrl = 'http://localhost:8080/stocklist'
    // axios.get(httpUrl).then((res) => {
    //   console.log("@@@res.data", res.data)
    //   let result = res.data.stocklist
    //   console.log("@@@result", result)
    // })
    let result = await axios.get(httpUrl)
    return result.data.stocklist
  }

  async superStocks() {
    console.log("@@@superStocks")
    let httpUrl = 'http://localhost:8080/superStock'
    // axios.get(httpUrl).then((res) => {
    //   console.log("@@@res.data", res.data)
    //   let result = res.data.stocklist
    //   console.log("@@@result", result)
    // })
    let result = await axios.get(httpUrl)
    return result.data.stocklist
  }
}
