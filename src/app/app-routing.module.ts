import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListaComponent } from "./containers/lista/lista.component";
import { InfoComponent } from './containers/info/info.component';
import { ContattiComponent } from './containers/contatti/contatti.component';
import { RatingComponent } from './containers/rating/rating.component';

const routes: Routes = [
  {
    path: "lista",
    component: ListaComponent
  },
  {
    path: "info",
    component: InfoComponent
  },
  {
    path: "contatti",
    component: ContattiComponent
  },
  {
    path: "rating",
    component: RatingComponent
  },
  {
    path: "",
    redirectTo: "rating",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "rating"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
/**
 * 
 */