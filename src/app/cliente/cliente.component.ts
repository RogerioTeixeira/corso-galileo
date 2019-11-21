import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  public clienti: Array<Cliente> = new Array<Cliente>();
  public clientiFiltered: Array<Cliente> = new Array<Cliente>();
  public search: String;
  constructor() { }

  ngOnInit() {
    console.log(this.clientiFiltered);
    this.clienti.push(new Cliente("Apple", "assets/images/apple.png", 123458747, 50000, 4))
    this.clienti.push(new Cliente("Google", "assets/images/google.png", 784512477, 1522437, 150))
    this.clienti.push(new Cliente("Ibm", "assets/images/ibm.png", 884587177, 2581437, 120))
    this.clienti.push(new Cliente("Shell", "assets/images/shell.png", 7841587177, 3547896, 320))
    this.clienti.push(new Cliente("Toyota", "assets/images/toyota.png", 7841587177, 447896, 320))
    this.clientiFiltered = [...this.clienti]
    console.log(this.clientiFiltered)
  }
  modifica(evento: any) {
    this.clientiFiltered = this.clienti.filter((item: Cliente) => item.denominazione.toLowerCase().includes(evento.toLowerCase()))

  }
}
