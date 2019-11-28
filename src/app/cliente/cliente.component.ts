import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  public clienti: Array<Customer> = new Array<Customer>();
  public filter: string;
  public cliente: any;
  public obs: Observable<string>;
  constructor(public clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
    this.clienteService.getAll(true).subscribe((clienti) => {
      this.clienti = clienti;
    })

    /* this.obs = new Observable((observer) => {
      setTimeout(() => {
        observer.next('ciao');
        observer.complete();
      }, 5000)
    })


    this.obs.subscribe((value: string) => {
      console.log("Risposta callback");
    })

    console.log("fuori callback");
    this.cliente = {
      id: 2,
      city: "milano",
      codeIva: 12244,
      address: "dddd",
      country: "Italia",
      name: "Google",
      invoices: [],
      urlLogo: "http://xxxxx.png",
      calcola: (val1, val2) => { return val1 + val2 }
    } */


  }

  delete(cliente: Customer) {
    this.clienteService.delete(cliente);
    //    this.clienti = this.clienteService.getAll();
  }

  filtra(filtro: string) {
    this.clienti = this.clienteService.filterLike(filtro);
  }

  select(cliente: Customer) {
    this.router.navigate(['pages/cliente', cliente.id]);
  }

}
