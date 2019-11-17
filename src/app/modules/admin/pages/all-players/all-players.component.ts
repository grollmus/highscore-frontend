import { Component, OnInit, Input } from '@angular/core';
import { Player } from '@app/models';
import { PlayerService } from '@app/services';
import {
  FormGroup,
  FormControlName,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.scss']
})
export class AllPlayersComponent implements OnInit {
  deleteDialog: HTMLDialogElement;
  deletePlayerForm = new FormGroup({
    answer: new FormControl('no', Validators.pattern('yes'))
  });
  selectedPlayterToDelete: Player;
  players: Player[];
  constructor(private readonly playerService: PlayerService) {}

  ngOnInit() {
    this.deleteDialog = document.querySelector('#delete-dialog');
    this.playerService.fetchAllPlayers();
    this.playerService.players.subscribe(
      response => (this.players = response),
      error => console.error(error)
    );
  }

  openDeleteDialog(id) {
    this.selectedPlayterToDelete = this.getPlayer(id);

    this.deleteDialog.showModal();
    console.log('id', id);
    console.log('player', this.selectedPlayterToDelete);
  }

  getPlayer(id: string): Player {
    return this.players.find(player => player._id === id);
  }

  deletePlayer(id): void {
    this.playerService.deletePlayer(id).subscribe(
      res => {
        if (res) {
          this.playerService.fetchAllPlayers();
          this.deleteDialog.close();
        }
      },
      err => console.error(err)
    );
  }

  submitDeletePlayer(): void {
    const { answer } = this.deletePlayerForm.value;
    if (answer === 'no' && this.selectedPlayterToDelete) {
      return;
    }
    this.deletePlayer(this.selectedPlayterToDelete._id);
  }
}
