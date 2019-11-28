import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Customer } from '../model/customer.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dettaglio-cliente',
  templateUrl: './dettaglio-cliente.component.html',
  styleUrls: ['./dettaglio-cliente.component.scss']
})
export class DettaglioClienteComponent implements OnInit {
  public cliente: Customer;
  public isVisible: boolean = false;

  constructor(private activedRouter: ActivatedRoute, private messageService: MessageService, private clienteService: ClienteService) { }

  ngOnInit() {
    this.reload();

  }


  reload() {
    const id: number = this.activedRouter.snapshot.params.id;
    this.clienteService.getById(id, true).subscribe(cliente => {
      this.cliente = cliente;
    });
  }


  open() {
    this.isVisible = true;
  }
  salva(event: Customer) {
    console.log("Evento salva:", event)
    const cliente = event;
    cliente.id = this.activedRouter.snapshot.params.id;
    this.clienteService.update(cliente).subscribe((value) => {
      this.messageService.add(
        {
          severity: 'success',
          summary: 'Messaggio',
          detail: 'Aggiornamento avvenuto con successo'
        });
      this.isVisible = false;
      this.reload();
    })
  }

}
