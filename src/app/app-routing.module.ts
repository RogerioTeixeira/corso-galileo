import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FattureComponent } from './fatture/fatture.component';
import { DettaglioClienteComponent } from './dettaglio-cliente/dettaglio-cliente.component';


const routes: Routes = [
  { path: "cliente", component: ClienteComponent },
  { path: "cliente/:id", component: DettaglioClienteComponent },
  { path: "fatture", component: FattureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
