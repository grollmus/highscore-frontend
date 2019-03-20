import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../models/player.interface';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.scss']
})
export class HighscoreComponent implements OnInit {

  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getAllUser().subscribe(players => {
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
