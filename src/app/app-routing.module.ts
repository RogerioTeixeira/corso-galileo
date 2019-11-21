import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FattureComponent } from './fatture/fatture.component';


const routes: Routes = [
  { path: "cliente", component: ClienteComponent },
  { path: "fatture", component: FattureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
