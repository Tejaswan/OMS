import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OrderDetailService {
    private baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      ExecutePostService<T>(uri: string, data: T): Observable<any> {
        return this.http.post<any>(this.baseUrl + uri, data, this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.errorHandl)
        )
      } 
      
      errorHandl(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
     }
}