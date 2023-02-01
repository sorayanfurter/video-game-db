import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
  constructor(){}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: {


        },
        setParams: {
          key: '49aec7abebd843a780696a520c135abc',
        }
      });
      return next.handle(req);

  }
}
