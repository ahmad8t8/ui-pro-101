import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {DatastoreService} from '../store/datastore-service';
import {Observable, retry} from 'rxjs';
import {RETRY_COUNT, SKIP_AUTH} from './skip-auth.token';


export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {

    if (req.context.get(SKIP_AUTH)) {
      // if (req.context.get(RETRY_COUNT)>0) {
      //   debugger
      //   return handler.handle(req).pipe(retry(req.context.get(RETRY_COUNT)));
      // }
        return handler.handle(req);
    }

    const authToken = inject(DatastoreService).getLoginData();
    // Clone the request to add the authentication header.
    console.log(authToken);
    const newReq = req.clone({
      headers: req.headers.append('Authorization', authToken?.access_token ? `Bearer ${authToken.access_token}` : ''),
    });
    return handler.handle(newReq);
  }
}
