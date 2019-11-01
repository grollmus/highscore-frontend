import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as dialogPolyfill from 'dialog-polyfill/dist/dialog-polyfill';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginDialog: HTMLDialogElement;

  constructor() {}

  ngOnInit() {
    this.loginDialog = document.querySelector('#dialog-login');
    dialogPolyfill.registerDialog(this.loginDialog);
  }
}
