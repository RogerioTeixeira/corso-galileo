import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, forkJoin } from 'rxjs';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.scss']
})
export class FattureComponent implements OnInit {
  public name: string;
  public form: FormGroup;
  public obs: Observable<any>;
  public obs2: Observable<any>;
  constructor(private build: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.form = this.build.group({
      name: ['aaa', Validators.compose([Validators.required, Validators.minLength(10)])]
    });
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });

  }

}
