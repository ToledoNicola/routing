import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"]
})
export class RatingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  nuovaValutazione(val:number){
    console.log('nuova valutazione:',val)
  }
}
