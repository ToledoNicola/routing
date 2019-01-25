import { Component, OnInit } from '@angular/core';
import { Attore } from 'src/app/models/attore';

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.scss"]
})
export class ListaComponent implements OnInit {
  attori: Attore[] = [
    { nome: "Carlo", cognome: "rossi", id: 1 },
    { nome: "Marco", cognome: "roggi", id: 2 },
    { nome: "Sergio", cognome: "Dalla", id: 3 },
    { nome: "Giovanni", cognome: "Sopra", id: 4 },
    { nome: "Michele", cognome: "Pavone", id: 5 },
    { nome: "Matteo", cognome: "Galdi", id: 6 }
  ];
  constructor() {}

  ngOnInit() {}

  trackById(index, pippo: Attore) {
    return pippo.id;
  }
}
