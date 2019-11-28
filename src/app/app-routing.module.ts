import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FattureComponent } from './fatture/fatture.component';
import { DettaglioClienteComponent } from './dettaglio-cliente/dettaglio-cliente.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  { path: "", redirectTo: "pages", pathMatch: "full" },
  {
    path: "pages", component: ContainerComponent, children: [
      { path: "cliente", component: ClienteComponent },
      { path: "cliente/:id", component: DettaglioClienteComponent },
      { path: "fatture", component: FattureComponent }
    ]
  },
  /* { path: "404", component: ErrorPageComponent },
  { path: "**", redirectTo: "404", pathMatch: "full" }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
