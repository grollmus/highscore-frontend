import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as dialogPolyfill from 'dialog-polyfill/dist/dialog-polyfill';
import { Auth } from '@app/models';
import { AuthService } from '@app/services';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from '@env/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appTitle = environment.app.title;
  loginDialog: HTMLDialogElement;
  isLoggedIn: boolean;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    console.log('Heder Component ngOnInit');
    this.loginDialog = document.querySelector('#dialog-login');
    dialogPolyfill.registerDialog(this.loginDialog);
    this.authService.isExpirationValid();
    this.authService.currentLoginStatus.subscribe(
      status => (this.isLoggedIn = status)
    );
  }

  login(email: string, password: string) {
    const credentials: Auth = { email, password };
    this.authService.login(credentials);
  }

  logout() {
    if (this.isLoggedIn) {
      this.authService.logout();
      this.router.navigate(['']);
      this.isLoggedIn = false;
    }
  }

  loginOrRedirectToAdmin() {
    console.log('loginOrRedirectToAdmiN() this.isLoggedIn', this.isLoggedIn);
    if (this.isLoggedIn) {
      this.router.navigate(['admin']);
    } else {
      this.loginDialog.showModal();
    }
  }
}
