import { Component, OnInit, Input } from '@angular/core';
import { Player } from '@app/models';
import { PlayerService } from '@app/services';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.sass']
})
export class AllPlayersComponent implements OnInit {
  players: Player[];
  constructor(private readonly playerService: PlayerService) {}
  @Input() isContentHidden = true;

  ngOnInit() {
    console.log('ngOnInit');
    this.playerService.players.subscribe(
      response => (this.players = response),
      error => console.error(error)
    );
  }
}
