import { Component, OnInit, Input } from '@angular/core';
import { Player } from '@app/models';
import { PlayerService } from '@app/services';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.scss']
})
export class AllPlayersComponent implements OnInit {
  players: Player[];
  constructor(private readonly playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.players.subscribe(
      response => (this.players = response),
      error => console.error(error)
    );
  }
}
