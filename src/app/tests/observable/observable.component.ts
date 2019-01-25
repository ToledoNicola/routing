import { Component, OnInit } from "@angular/core";
import { interval, Observable } from "rxjs";

@Component({
  selector: "app-observable",
  templateUrl: "./observable.component.html",
  styleUrls: ["./observable.component.scss"]
})
export class ObservableComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // let ob = interval(3000);

    // ob.subscribe(value => {
    //   console.log("numero interval", value);
    // });

    let ob = Observable.create(function (observer){
      setTimeout(() => {
        observer.next('sono il primo dell observable 1')
      }, 1000);


    })

    let ob2 = new Observable(observer =>{
      setTimeout(() => {
        observer.next('sono il primo dell observable 2')
      }, 2000);
    })





  }


}
