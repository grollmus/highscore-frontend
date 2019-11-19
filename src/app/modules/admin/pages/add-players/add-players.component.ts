import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Player } from '@app/models';
import { PlayerService } from '@app/services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.scss']
})
export class AddPlayersComponent implements OnInit {
  validatedPlayersToAdd = new BehaviorSubject([]);
  isSubmitValid = false;
  existingPlayerNames: string[];
  addPlayerNamesForm = new FormGroup({
    playerNames: new FormControl()
  });

  constructor(private readonly playerService: PlayerService) {}
  ngOnInit() {
    this.getPlayerNames();
    this.validatedPlayersToAdd.subscribe(
      players => {
        this.validateSubmit();
      },
      err => console.error(err)
    );
  }

  getPlayerNames(): void {
    this.playerService
      .getPlayerNames()
      .subscribe((res: string[]) => (this.existingPlayerNames = res));
  }

  validateSubmit(): void {
    const oneOrMoreValidPlayerName = this.validatedPlayersToAdd
      .getValue()
      .some(player => player.isValid === true);
    this.isSubmitValid =
      this.validatedPlayersToAdd.getValue().length > 0 &&
      oneOrMoreValidPlayerName;
  }

  validatePlayerNames(playerNamesInputValue: string): void {
    const playerNames = playerNamesInputValue
      .toUpperCase()
      .trim()
      .replace(/\s/g, '')
      .split(',');

    const checkedPlayers = playerNames.map(name => {
      let isValid = true;
      if (name.length !== 3 || this.existingPlayerNames.includes(name)) {
        isValid = false;
      }
      return { name, isValid };
    });

    this.validatedPlayersToAdd.next(checkedPlayers);
  }

  submitPlayerNames(event) {
    if (!this.isSubmitValid) {
      return;
    }
    const playerNamesToSubmit = this.validatedPlayersToAdd
      .getValue()
      .filter(playerName => playerName.isValid);

    this.playerService.addPlayers(playerNamesToSubmit).subscribe(
      res => {
        this.addPlayerNamesForm.setValue({ playerNames: '' });
        this.validatedPlayersToAdd.next([]);
        this.getPlayerNames();
      },
      err => console.error(err)
    );
    return false;
  }
}
