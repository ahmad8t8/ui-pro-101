import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {DatastoreService} from '../store/datastore-service';
import {Observable} from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = inject(DatastoreService).getAccessToken();
    // Clone the request to add the authentication header.
    const newReq = req.clone({
      headers: req.headers.append('X-Authentication-Token', authToken ? authToken : ''),
    });
    return handler.handle(newReq);
  }
}
