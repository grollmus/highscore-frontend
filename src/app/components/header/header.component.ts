import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as dialogPolyfill from 'dialog-polyfill/dist/dialog-polyfill';
import { Auth } from '@app/models';
import { AuthService } from '@app/services';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from '@env/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appTitle = environment.app.title;
  loginDialog: HTMLDialogElement;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  isLoggedIn: boolean;
  isDemo = environment.demo;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.loginDialog = document.querySelector('#dialog-login');
    dialogPolyfill.registerDialog(this.loginDialog);
    this.authService.isExpirationValid();
    this.authService.currentLoginStatus.subscribe(status => {
      this.isLoggedIn = status;
      if (status) {
        this.loginDialog.close();
      }
    });
  }

  private login(email: string, password: string) {
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
    if (this.isLoggedIn) {
      this.router.navigate(['admin']);
    } else {
      this.loginDialog.showModal();
    }
  }

  submitLogin() {
    console.log('submit');
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.login(email, password);
    }
  }
}
