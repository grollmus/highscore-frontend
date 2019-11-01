import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as dialogPolyfill from 'dialog-polyfill/dist/dialog-polyfill';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})

export class ControlsComponent implements OnInit {

  @ViewChild('addPlayerDialog', { static: true })
  private addPlayerDialog: ElementRef;
  nativeAddPlayerDialog: any;

  @ViewChild('addScoreDialog', { static: true })
  private addScoreDialog: ElementRef;
  nativeAddScoreDialog: any;

  @ViewChild('removePlayerDialog', { static: true })
  private removePlayerDialog: ElementRef;
  nativeRemovePlayerDialog: any;

  constructor(private playerService: PlayerService) { }

  addPlayer(name: string) {
    this.playerService.addPlayer(name);
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
    dialogPolyfill.registerDialog(this.addPlayerDialog.nativeElement);
    dialogPolyfill.registerDialog(this.addScoreDialog.nativeElement);
    dialogPolyfill.registerDialog(this.removePlayerDialog.nativeElement);

    this.nativeAddPlayerDialog = this.addPlayerDialog.nativeElement;
    this.nativeAddScoreDialog = this.addScoreDialog.nativeElement;
    this.nativeRemovePlayerDialog = this.removePlayerDialog.nativeElement;
  }

}
