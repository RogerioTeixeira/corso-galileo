import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, forkJoin } from 'rxjs';
import { combineAll } from 'rxjs/operators';

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
  constructor(private build: FormBuilder) { }

  ngOnInit() {
    this.form = this.build.group({
      name: ['aaa', Validators.compose([Validators.required, Validators.minLength(10)])]
    })
    this.obs2 = forkJoin(this.obs)
    this.obs = new Observable<string>((observer) => {
      setTimeout(() => {
        observer.next('pippo');
        observer.complete();
      }, 3000)

    })
    this.obs.subscribe((x) => { alert('valore x:' + x) })
  }

}
