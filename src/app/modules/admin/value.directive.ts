import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appValue]',
  exportAs: 'appValue'
})
export class AppValueDirective {
  @Input() appValue: any;
  constructor() {}
}
