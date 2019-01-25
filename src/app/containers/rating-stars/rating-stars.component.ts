import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { Star } from "src/app/models/star";

@Component({
  selector: "app-rating-stars",
  templateUrl: "./rating-stars.component.html",
  styleUrls: ["./rating-stars.component.scss"]
})
export class RatingStarsComponent implements OnInit, OnChanges {
  @Input() quantity: number;
  @Input() valutazione: number;
  @Output() selected = new EventEmitter();

  stars: Star[] = [];

  constructor() {}

  ngOnChanges() {
    this.setStars(this.valutazione - 1);
  }

  ngOnInit() {}

  setStars(i: number = -1) {
    for (let index = 0; index < this.quantity; index++) {
      if (index <= i) {
        this.stars[index] = { active: true };
      } else {
        this.stars[index] = { active: false };
      }
    }
  }
  mouseSopra(index) {
    this.setStars(index);
  }
  mouseFuori() {
    console.log("sono fuori ritorna a ", this.valutazione - 1);
    this.setStars(this.valutazione - 1);
  }

  selectedStar(i) {
    console.log("sono sytato cliccato");

    this.setStars(i);
    this.selected.emit(i + 1);
  }
}

/**
 * (mouseenter)="aggiornaColore(i)"
  (mouseleave)="resetColore()"
 */
