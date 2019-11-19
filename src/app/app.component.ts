import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  reavelContainerHidden = true;
  reavelsToHide = {
    addPlayer: true,
    changeScore: true,
  };
  reavelIsActive: string;
  title = 'Grollmus Leaderboard';
  ranklist = [
    {
      name: 'Dan',
      score: 654162,
    },
    {
      name: 'Ale',
      score: 651522,
    },
    {
      name: 'Pat',
      score: 9565165,
    },
    {
      name: 'Ben',
      score: 343453,
    },
    {
      name: 'Flo',
      score: 4536656,
    },
    {
      name: 'Luk',
      score: 354656,
    },
  ];

  openModal(reavelId: string) {
    this.reavelIsActive = reavelId;
    this.reavelContainerHidden = false;
    this.reavelsToHide[reavelId] = false;
  }

  closeModal() {
    this.reavelContainerHidden = true;
    this.reavelsToHide[this.reavelIsActive] = true;
  }
}
