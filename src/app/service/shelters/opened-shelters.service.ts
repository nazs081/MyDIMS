import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Shelters } from './../../shelters';

// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json",
                          "Authorization": "MyDIMSToken_2f788d589cd6ed64b1952b948b5573acded39ad0" })
};
const apiUrl = 'https://mydims.nadma.gov.my/Modules/Services/mobileapi1.php?type=openedshelters';

@Injectable({
  providedIn: 'root'
})

export class OpenedSheltersService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getShelters(): Observable<Shelters[]> {
  return this.http.get<Shelters[]>(apiUrl, httpOptions)
    .pipe(
      tap(shelters => console.log('fetched shelters')),
      catchError(this.handleError('getShelters', []))
    );
  }

    getShelter(id: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Shelters>(url,httpOptions).pipe(
      tap(_ => console.log(`fetched Shelter id=${id}`)),
      catchError(this.handleError<Shelters>(`getShelter id=${id}`))
    );
  }

  // addProduct(product: Product): Observable<Product> {
  //   return this.http.post<Product>(apiUrl, product, httpOptions).pipe(
  //     tap((prod: Product) => console.log(`added product w/ id=${prod._id}`)),
  //     catchError(this.handleError<Product>('addProduct'))
  //   );
  // }
  //
  // updateProduct(id: any, product: any): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.put(url, product, httpOptions).pipe(
  //     tap(_ => console.log(`updated product id=${id}`)),
  //     catchError(this.handleError<any>('updateProduct'))
  //   );
  // }
  //
  // deleteProduct(id: any): Observable<Product> {
  //   const url = `${apiUrl}/${id}`;
  //
  //   return this.http.delete<Product>(url, httpOptions).pipe(
  //     tap(_ => console.log(`deleted product id=${id}`)),
  //     catchError(this.handleError<Product>('deleteProduct'))
  //   );
  // }


}
