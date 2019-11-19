import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import dialogPolyfill from 'dialog-polyfill';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  addPlayerDialog: HTMLDialogElement;
  addScoreDialog: HTMLDialogElement;
  removePlayerDialog: HTMLDialogElement;

  constructor(private playerService: PlayerService) {}

  addPlayer(name: string) {
    // this.playerService.addPlayer(name);
  }

  deletePlayer(playerId: string) {
    this.playerService.deletePlayer(playerId);
  }

  getAllPlayers() {
    return this.playerService.players;
  }

  addScore(playerId: string, reason: string, score: number) {
    this.playerService.addScore(playerId, reason, Number(score));
  }

  ngOnInit() {
    dialogPolyfill.registerDialog(this.addPlayerDialog);
    dialogPolyfill.registerDialog(this.addScoreDialog);
    dialogPolyfill.registerDialog(this.removePlayerDialog);
  }
}
