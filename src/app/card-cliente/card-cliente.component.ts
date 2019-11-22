import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../model/cliente.model';


@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.scss']
})
export class CardClienteComponent implements OnInit {
  @Input()
  public cliente: Cliente;

  @Output()
  public onDelete: EventEmitter<Cliente> = new EventEmitter<Cliente>();

  @Output()
  public onSelect: EventEmitter<Cliente> = new EventEmitter<Cliente>();

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

}
