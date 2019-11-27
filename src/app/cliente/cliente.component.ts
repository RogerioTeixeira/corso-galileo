import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  public clienti: Array<Customer> = new Array<Customer>();
  public filter: string;
  constructor(public clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
    this.clienteService.getAll(true).subscribe((clienti) => {
      this.clienti = clienti;
    })


  }

  delete(cliente: Customer) {
    this.clienteService.delete(cliente);
    //    this.clienti = this.clienteService.getAll();
  }

  filtra(filtro: string) {
    this.clienti = this.clienteService.filterLike(filtro);
  }

  select(cliente: Customer) {
    this.router.navigate(['cliente', cliente.id]);
  }

}
