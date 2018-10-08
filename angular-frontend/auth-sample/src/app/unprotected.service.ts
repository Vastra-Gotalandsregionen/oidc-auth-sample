import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnprotectedService {

  constructor(private http: HttpClient) { }

  getValues(): Observable<string[]> {
    return this.http
      .get<string[]>(`${environment.apiUrl}/unprotected`)
      .pipe(catchError(error => {
        const errorResponse = error as HttpErrorResponse;
        return throwError(errorResponse.message);
      }));
  }
}
