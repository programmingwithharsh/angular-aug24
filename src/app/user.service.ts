import { Injectable } from '@angular/core';
import { Iuser } from './iuser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = "http://localhost:4000/users/";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.userUrl)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
