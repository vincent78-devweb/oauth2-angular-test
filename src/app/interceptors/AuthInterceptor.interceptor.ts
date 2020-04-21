import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
  } from "@angular/common/http";
  import { Observable } from "rxjs";
  
  export class AuthInterceptor implements HttpInterceptor {
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const cloneReq = req.clone({
        params: req.params.set(
          "auth-token",
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"
        )
      });
      return next.handle(cloneReq);
    }
  }