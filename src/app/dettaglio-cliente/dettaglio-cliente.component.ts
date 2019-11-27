import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-dettaglio-cliente',
  templateUrl: './dettaglio-cliente.component.html',
  styleUrls: ['./dettaglio-cliente.component.scss']
})
export class DettaglioClienteComponent implements OnInit {
  public cliente: Customer;

  constructor(private activedRouter: ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.load();
    const id: number = this.activedRouter.snapshot.params.id;
    this.clienteService.getById(id, true).subscribe(cliente => {
      this.cliente = cliente;
    });
  }

}
