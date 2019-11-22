import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente.model';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  public clienti: Array<Cliente> = new Array<Cliente>();
  public filter: string;
  constructor(public clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
    this.clienteService.load();
    this.clienti = this.clienteService.getAll();
  }

  delete(cliente: Cliente) {
    this.clienteService.delete(cliente);
    this.clienti = this.clienteService.getAll();
  }

  filtra(filtro: string) {
    this.clienti = this.clienteService.filterLike(filtro);
  }

  select(cliente: Cliente) {
    this.router.navigate(['cliente', cliente.pIva]);
  }

}
