import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class CustomGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.getLoginStatus()) {
           return true;
        } else {
            this.router.navigate(['/home']);
            return false;
        }
        // return new Promise(res => {
        //     if (this.authService.getLoginStatus()) {
        //         res(true);
        //     } else {
        //         this.router.navigate['/authenticate']
        //         res(false);
        //     }
        // });
    }
}