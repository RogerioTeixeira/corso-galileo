import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer.model';


@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {
  @Input()
  public cliente: Customer;

  @Output()
  onUpdate: EventEmitter<Customer> = new EventEmitter<Customer>();

  @Output()
  onInsert: EventEmitter<Customer> = new EventEmitter<Customer>();

  public formGroup: FormGroup;
  public submit: boolean = false;
  public isCreate: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log("Cliente:", this.cliente)
    this.isCreate = !this.cliente;
    this.formGroup = this.fb.group({
      name: [this.cliente ? this.cliente.name : '', Validators.required],
      codeIva: [this.cliente ? this.cliente.codeIva : '', Validators.required],
      country: [this.cliente ? this.cliente.country : '', Validators.required],
      city: [this.cliente ? this.cliente.city : ''],
      address: [this.cliente ? this.cliente.address : '']
    })
  }

  salva() {
    if (this.formGroup.valid) {
      const cliente: Customer = new Customer();
      cliente.address = this.formGroup.value.address;
      cliente.city = this.formGroup.value.city;
      cliente.name = this.formGroup.value.name;
      cliente.codeIva = this.formGroup.value.codeIva;
      cliente.country = this.formGroup.value.country;
      cliente.urlLogo = 'https://corso-angular-server.herokuapp.com/public/fallback.png';
      if (this.isCreate) {
        this.onInsert.emit(cliente)
      } else {
        this.onUpdate.emit(cliente)
      }

    }

  }

}
