import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated: any = new BehaviorSubject(null);
  public userName: any = new BehaviorSubject(null);
  public userId: any = new BehaviorSubject(null);

  public userDetails = [
    { userid: 'abc@media.com', password: 'abc123', username: 'Tom' },
    { userid: 'def@media.com', password: 'def123', username: 'Dick' }
  ];

  constructor() { }

  public isLoggedIn(): Observable<any> {
    return this.isAuthenticated.value;
  }

  public setLoginStatus(value: boolean): void {
    this.isAuthenticated.next(value);
  }

  public getLoginStatus() {
    if (localStorage.getItem('isLoggedIn') !== null) {
      if (localStorage.getItem('isLoggedIn') === 'true') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  public setUserName(value: string): void {
    this.userName.next(value);
  }

  public getUserName(): Observable<any> {
    return this.userName.value;
  }

  public setUserId(value: string): void {
    this.userId.next(value);
  }

  public getUserId(): Observable<any> {
    return this.userId.value;
  }

}
