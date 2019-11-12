import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.sass']
})
export class AddPlayerComponent implements OnInit {
  @Input() isContentHidden = true;

  constructor() {}

  ngOnInit() {}
}
