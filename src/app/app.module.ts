import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// mdb
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { CardComponent } from "./components/card/card.component";
import { ListaComponent } from "./containers/lista/lista.component";
import { InfoComponent } from "./containers/info/info.component";
import { ContattiComponent } from "./containers/contatti/contatti.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { ModaleComponent } from './components/modale/modale.component';
import { StarComponent } from './components/star/star.component';
import { RatingComponent } from './containers/rating/rating.component';
import { RatingStarsComponent } from './containers/rating-stars/rating-stars.component';
import { ObservableComponent } from './tests/observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListaComponent,
    InfoComponent,
    ContattiComponent,
    ContactFormComponent,
    ModaleComponent,
    StarComponent,
    RatingComponent,
    RatingStarsComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
