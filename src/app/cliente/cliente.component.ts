import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  public clienti: Array<Customer> = new Array<Customer>();
  public filter: string;
  public cliente: any;
  public isVisible: boolean = false;
  public obs: Observable<string>;
  public formGroup: FormGroup;
  public submit: boolean = false;
  constructor(private fb: FormBuilder, private messageService: MessageService, public clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
    this.reload();
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      codeIva: ['', Validators.required],
      country: ['', Validators.required],
      city: [''],
      address: ['']
    })


    /* this.obs = new Observable((observer) => {
      setTimeout(() => {
        observer.next('ciao');
        observer.complete();
      }, 5000)
    })


    this.obs.subscribe((value: string) => {
      console.log("Risposta callback");
    })

    console.log("fuori callback");
    this.cliente = {
      id: 2,
      city: "milano",
      codeIva: 12244,
      address: "dddd",
      country: "Italia",
      name: "Google",
      invoices: [],
      urlLogo: "http://xxxxx.png",
      calcola: (val1, val2) => { return val1 + val2 }
    } */


  }

  reload() {
    this.clienteService.getAll(true).subscribe((clienti) => {
      this.clienti = clienti;
    })
  }
  salva(cliente: Customer) {
    this.clienteService.add(cliente).subscribe((value) => {
      this.messageService.add(
        {
          severity: 'success',
          summary: 'Messaggio',
          detail: 'Inserimento avvenuto con successo'
        });
      this.isVisible = false;
      this.reload();
    })

  }

  open() {
    this.isVisible = true;
    this.submit = false;
    this.formGroup.reset();
  }

  delete(cliente: Customer) {
    this.clienteService.delete(cliente).subscribe((value) => {
      this.messageService.add(
        {
          severity: 'success',
          summary: 'Messaggio',
          detail: 'Cliente eliminato con successo'
        });
      this.reload();

    })

  }

  filtra(filtro: string) {
    this.clienteService.filterLike(filtro).subscribe((clienti) => {
      this.clienti = clienti;
    })
    // this.clienti = this.clienteService.filterLike(filtro);
  }

  select(cliente: Customer) {
    this.router.navigate(['pages/cliente', cliente.id]);
  }

}
