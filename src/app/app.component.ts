import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.getLoginStatus()) {
      this.authService.setLoginStatus(true);
      this.authService.setUserId(String(localStorage.getItem('userId')));
      this.authService.setUserName(String(localStorage.getItem('userName')));

    } else {
      this.authService.setLoginStatus(false);
    }
  }

}
