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

  filterLike(filter: string): Observable<Customer[]> {
    const params: HttpParams = new HttpParams()
      .append("name_like", filter)
      .append("_embed", "invoices");
    return this.api.get<Customer[]>('/customers', params)

  }

  add(cliente: Customer): Observable<Customer> {
    return this.api.post<Customer>('/customers', cliente);
  }

  update(cliente: Customer): Observable<Customer> {
    return this.api.patch<Customer>('/customers/' + cliente.id, cliente);
  }

  delete(cliente: Customer): Observable<any> {
    return this.api.delete('/customers/' + cliente.id);
  }
}
