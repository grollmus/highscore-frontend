import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  isHidden = {
    allPlayers: true
  };
  constructor() {}

  ngOnInit() {}

  toggleAllPlayers() {
    this.isHidden.allPlayers = !this.isHidden.allPlayers;
  }
}
