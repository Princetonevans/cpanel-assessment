import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, concatAll } from 'rxjs/operators';

@Injectable()
export class FlikrService {

  private url = 'assets/flikr/flikr.json';
  public data;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

getPictures(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data)
        )),
        // catchError(this.handleError)
      );
  }
}