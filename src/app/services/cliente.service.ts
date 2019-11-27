import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public clienti: Array<Customer>;

  constructor(private api: ApiService) { }

  load() {
  }

  private getParams(embed: boolean): HttpParams {
    let params: HttpParams = null;
    if (embed) {
      params = new HttpParams().append("_embed", "invoices");
    }
    return params;
  }
  getAll(embed?: boolean): Observable<Customer[]> {

    return this.api.get<Customer[]>('/customers', this.getParams(embed));
  }
  getById(id: number, embed?: boolean): Observable<Customer> {
    return this.api.get<Customer>('/customers/' + id, this.getParams(embed));
  }

  getBypiva(pIva: number): Customer {
    const clienti = this.clienti.filter((item: Customer) => item.codeIva == pIva);
    return clienti[0];
  }

  filterLike(filter: string): Customer[] {
    return this.clienti.filter((item: Customer) => item.name.toLowerCase().includes(filter.toLowerCase()));
  }

  add(cliente: Customer): void {
    this.clienti.push(cliente);
  }

  delete(cliente: Customer) {
    this.clienti = this.clienti.filter((item: Customer) => item.codeIva != cliente.codeIva);
  }
}
