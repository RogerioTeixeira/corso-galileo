import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../model/customer.model';


@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.scss']
})
export class CardClienteComponent implements OnInit {
  @Input()
  public cliente: Customer;

  @Output()
  public onDelete: EventEmitter<Customer> = new EventEmitter<Customer>();

  @Output()
  public onSelect: EventEmitter<Customer> = new EventEmitter<Customer>();

  public isVisible: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.onDelete.emit(this.cliente);
  }

  select() {
    this.onSelect.emit(this.cliente);
  }

  toggle() {
    this.isVisible = !this.isVisible;
  }

  get totaleFattura(): number {
    return this.cliente.invoices.length > 0 ? this.cliente.invoices
      .map((item) => item.netAmount + item.ivaAmount)
      .reduce((acc, item) => acc + item) : 0;
  }

  get numeroFatture(): number {
    return this.cliente.invoices.length;
  }

}
