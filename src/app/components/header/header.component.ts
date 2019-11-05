import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as dialogPolyfill from 'dialog-polyfill/dist/dialog-polyfill';
import { Auth } from 'src/app/models/auth.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginDialog: HTMLDialogElement;
  isLoggedIn = this.authService.isLoggedIn();

  constructor(private readonly authService: AuthService) {}

  ngOnInit() {
    this.loginDialog = document.querySelector('#dialog-login');
    dialogPolyfill.registerDialog(this.loginDialog);
  }

  auth(email: string, password: string) {
    const credentials: Auth = { email, password };
    this.authService.login(credentials);
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
