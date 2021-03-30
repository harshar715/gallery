import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public activeId: any = 1;
  public modal: any;

  public userName: string = '';
  public password: string = '';

  public showError: boolean = false;
  public showSuccess: boolean = false;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.modal = document.getElementById("myModal");
  }

  public addClassActive(id: number, string: string) {
    this.activeId = id;
    if (string === 'home') {
      this.router.navigate(['/home']);
    } else if (string === 'about') {
      this.router.navigate(['/about']);
    } else if (string === 'gallery') {
      if (this.authService.isLoggedIn()) {
        this.router.navigate(['/gallery']);
      } else {
        this.activeId = 1;
        this.router.navigate(['/home']);
      }
    }
  }

  public logout() {
    localStorage.clear();
    this.authService.setLoginStatus(false);
    this.router.navigate(['/home']);
    this.activeId = 1;
  }

  public showModal() {
    this.modal.style.display = "block";
  }

  public closeModal() {
    this.modal.style.display = "none";
    this.userName = '';
    this.password = '';
  }

  public login() {
    let isLogin = false;
    this.authService.userDetails.forEach(res => {
      if (this.userName === res.userid && this.password === res.password) {
        isLogin = true;
        this.showSuccess = true;
        this.userName = '';
        this.password = '';
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', res.username);
        localStorage.setItem('userId', res.userid);
        this.authService.setLoginStatus(true);
        this.authService.setUserId(res.userid);
        this.authService.setUserName(res.username);
        setTimeout(() => {
          this.showSuccess = false;
          this.closeModal();
        }, 3000);
      }
    });
    if (!isLogin) {
      this.showError = true;
      this.userName = '';
      this.password = '';
      this.authService.setLoginStatus(false);
      setTimeout(() => {
        this.showError = false;
      }, 5000);
    }

  }

}
