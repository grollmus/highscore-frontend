import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../models/player.interface';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.scss']
})
export class HighscoreComponent implements OnInit {

  players: Player[] = [];
  currentPlayer: Player;

  @ViewChild('history', { static: true }) historyRef: ElementRef;
  constructor(private playerService: PlayerService) { }

  deletePlayer(playerId: string) {
    this.playerService.deletePlayer(playerId);
  }

  showHistory(playerId: string) {
    this.currentPlayer = this.players.find(p => p._id === playerId);
    this.historyRef.nativeElement.showModal();
  }

  closeDialog() {
    this.historyRef.nativeElement.close();
  }

  ngOnInit() {
    this.playerService.fetchAllPlayers();
    this.playerService.players.subscribe(players => {
      this.players = players.sort((a: Player, b: Player) => {
        if (a.totalScore > b.totalScore) {
          return 1;
        } else if (a.totalScore < b.totalScore) {
          return -1;
        }
        return 0;
      }).reverse();
    });
  }

}
