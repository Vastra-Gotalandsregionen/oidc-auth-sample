import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProtectedService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getValues(): Observable<string[]> {
    return this.http
      .get<string[]>(`${environment.apiUrl}/protected`, this.createHttpOptions())
      .pipe(catchError(error => {
        const errorResponse = error as HttpErrorResponse;
        return throwError(errorResponse.message);
      }));
  }

  private createHttpOptions(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        authorization: `${this.authService.user.token_type} ${this.authService.user.access_token}`
      })
    };
  }
}
