import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../model/cliente.model';

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.scss']
})
export class CardClienteComponent implements OnInit {
  @Input()
  public cliente: Cliente
  public test: Date = new Date();

  public isVisible: boolean = true;

  constructor() { }

  ngOnInit() {
  }


  toggle() {
    this.isVisible = !this.isVisible;
  }

}
