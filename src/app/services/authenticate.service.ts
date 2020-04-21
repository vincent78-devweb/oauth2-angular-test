import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  login(): Observable<any>{
    return this.http.get<any>("http://localhost:8090/oauth2/authorization/github").pipe(
      tap(() => console.log("connect response"))
    );
  }
}
