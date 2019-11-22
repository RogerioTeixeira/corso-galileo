import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public clienti: Array<Cliente>;

  constructor() { }

  load() {
    this.clienti = new Array<Cliente>();
    this.clienti.push(new Cliente("Apple", "assets/images/apple.png", 123458747, 50000, 4))
    this.clienti.push(new Cliente("Google", "assets/images/google.png", 784512477, 1522437, 150))
    this.clienti.push(new Cliente("Ibm", "assets/images/ibm.png", 884587177, 2581437, 120))
    this.clienti.push(new Cliente("Shell", "assets/images/shell.png", 3334444, 3547896, 320))
    this.clienti.push(new Cliente("Toyota", "assets/images/toyota.png", 657865467, 447896, 320))
  }

  getAll(): Cliente[] {
    return this.clienti;
  }

  getBypiva(pIva: number): Cliente {
    const clienti = this.clienti.filter((item: Cliente) => item.pIva == pIva);
    return clienti[0];
  }

  filterLike(filter: string): Cliente[] {
    return this.clienti.filter((item: Cliente) => item.denominazione.toLowerCase().includes(filter.toLowerCase()));
  }

  add(cliente: Cliente): void {
    this.clienti.push(cliente);
  }

  delete(cliente: Cliente) {
    this.clienti = this.clienti.filter((item: Cliente) => item.pIva != cliente.pIva);
  }
}
