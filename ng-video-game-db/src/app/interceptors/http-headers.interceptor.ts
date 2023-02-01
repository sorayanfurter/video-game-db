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
          'x-rapidapi-key' : 'b5f45968d5msh3663c8c1c265936p115c19jsn4b53e75f9658',
          'x-rapidapi-host' : 'rawg-video-games-database.p.rapidapi.com',
        },
        setParams: {
          key: '49aec7abebd843a780696a520c135abc',
        }
      });
      return next.handle(req);

  }
}
