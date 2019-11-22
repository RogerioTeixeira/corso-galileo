import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../model/cliente.model';

@Component({
  selector: 'app-dettaglio-cliente',
  templateUrl: './dettaglio-cliente.component.html',
  styleUrls: ['./dettaglio-cliente.component.scss']
})
export class DettaglioClienteComponent implements OnInit {
  public cliente: Cliente;

  constructor(private activedRouter: ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.load();
    const piva: number = this.activedRouter.snapshot.params.id;
    this.cliente = this.clienteService.getBypiva(piva);
  }

}
