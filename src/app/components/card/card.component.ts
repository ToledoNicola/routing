import { Component, OnInit, Input } from '@angular/core';
import { Attore } from 'src/app/models/attore';

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() attore: Attore;
  colorCard:boolean
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.colorCard = true
    }, 4000);
  }

  getName(){
    return `${this.attore.nome} ${this.attore.cognome}`
  }
}
