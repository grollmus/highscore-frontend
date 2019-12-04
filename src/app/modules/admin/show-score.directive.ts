import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appShowScore]',
  exportAs: 'appShowScore'
})
export class ShowScoreDirective {
  @Input() appShowScore: any;
  constructor() {}
}
