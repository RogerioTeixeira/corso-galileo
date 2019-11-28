import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly host = environment.host_api;
  constructor(private http: HttpClient) { }

  public get<T>(path: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.host}${path}`, { params: params })
      .pipe(retry(2), catchError(this.errorHandler));
  }

  public delete<T>(path: string, params?: HttpParams): Observable<T> {
    return this.http.delete<T>(`${this.host}${path}`, { params: params });
  }

  public post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.host}${path}`, body, {
      headers: this.setHeader()
    })
  }

  public patch<T>(path: string, body: any): Observable<T> {
    return this.http.patch<T>(`${this.host}${path}`, body, {
      headers: this.setHeader()
    })
  }

  private setHeader(): HttpHeaders {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json')
    return header;
  }
  private errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
