import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {



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
  }

}
