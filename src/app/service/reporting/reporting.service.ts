import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Reporting } from './../../reporting';

// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json",
                          "Authorization": "MyDIMSToken_2f788d589cd6ed64b1952b948b5573acded39ad0" })
};
const apiUrl = 'https://mydims.nadma.gov.my/Modules/Services/situation_report.php?op=list&limitcount=4';

@Injectable({
  providedIn: 'root'
})

export class ReportingService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getReporting(): Observable<any> {
  return this.http.get<Reporting[]>(apiUrl, httpOptions)
    .pipe(
      tap(reporting => console.log('fetched reporting list')),
      catchError(this.handleError('getReporting', []))
    );
  }
}
