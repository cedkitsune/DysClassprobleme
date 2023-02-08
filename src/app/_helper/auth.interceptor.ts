import { HTTP_INTERCEPTORS, HttpEvent,HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorageService } from "../services/token-storage.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenStorage: TokenStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // on recupere une requete en cour d'acheminement 
    let authReq = req;
    // on recupere le token
    const token = this.tokenStorage.getToken();

    if(token != null) {
      // on req et on y ajoute dans le header 
      authReq = req.clone({ headers: req.headers.set("Authorization", "Bearer" + token)});
    }

    // l'intercepteur laisse la requête repartie vers le back
    return next.handle(authReq);
  }
}

export const AuthInterceptorProviders =[
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]