import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Notify } from './../../notify';
import { NotifyComment } from './../../notifyComment';
import { Comment } from './../../comment';

// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json",
                          "Authorization": "MyDIMSToken_2f788d589cd6ed64b1952b948b5573acded39ad0" })
};

const httpOptions_POST = {
  headers: new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded",
                             "Authorization": "MyDIMSToken_2f788d589cd6ed64b1952b948b5573acded39ad0" })
};

const apiUrl = 'https://mydims.nadma.gov.my/Modules/Services/broadcast_msg.php?op=msg_list';
const apiUrldetail = 'https://mydims.nadma.gov.my/Modules/Services/broadcast_msg.php?';

@Injectable({
  providedIn: 'root'
})

export class NotifyService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getNotifys(): Observable<any> {
  return this.http.get<Notify[]>(apiUrl, httpOptions)
    .pipe(
      tap(reporting => console.log('fetched notification list')),
      catchError(this.handleError('getNotify', []))
    );
  }

  getNotify(id: any): Observable<any> {
    const url = `${apiUrldetail}f110broadcastid=${id}&op=msg_detail`;
    return this.http.get<Notify>(url,httpOptions).pipe(
      tap(_ => console.log(`fetched notify id=${id}`)),
      catchError(this.handleError<Notify>(`getNotify id=${id}`))
    );
  }

  getNotifyComment(id: any): Observable<any> {
    const url = `${apiUrldetail}f110broadcastid=${id}&op=reply_list&limitstart=0&limitcount=10`;
    return this.http.get<NotifyComment[]>(url,httpOptions).pipe(
      tap(_ => console.log(`fetched notify comment id=${id}`)),
      catchError(this.handleError<NotifyComment>(`getNotifyComment id=${id}`))
    );
  }

  postComment(comment: Comment): Observable<Comment> {
    let params = new HttpParams()
              .append('f110broadcastid',comment.f110broadcastid)
              .append('uidtoken',comment.uidtoken)
              .append('replytext',comment.replytext)
              .toString();
    const urlPOST = `${apiUrldetail}op=reply_new`;
    return this.http.post<any>(urlPOST, params, httpOptions_POST )
      .pipe(
       catchError(this.handleError<Comment[]>('addComment'))
  );
  }

 //  editComment(editcomment: NotifyComment): Observable<NotifyComment> {
 //    let params = new HttpParams()
 //              .append('f110broadcastid',editcomment.f110broadcastid)
 //              .append('uidtoken',editcomment.uidtoken)
 //              .append('replytext',editcomment.replytext)
 //              .toString();
 //    const urlPOST = `${apiUrldetail}op=reply_edit`;
 //    return this.http.post<any>(urlPOST, params, httpOptions_POST )
 //      .pipe(
 //       catchError(this.handleError<NotifyComment[]>('editComment'))
 //  );
 // }

  deleteComment(id, token): Observable<any> {
    let params = new HttpParams()
              .append('f110replyid',id)
              .append('uidtoken',token)
              .toString();
              console.log(params);
    const urlPOST = `${apiUrldetail}op=reply_delete`;
    return this.http.post<any>(urlPOST, params, httpOptions_POST )
      .pipe(
       catchError(this.handleError<any[]>('deleteComment'))
  );
  }

}
