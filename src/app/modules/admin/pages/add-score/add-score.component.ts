import { Component, OnInit } from '@angular/core';
import { PlayerService } from '@app/services';
import {
  FormGroup,
  FormControlName,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.component.html',
  styleUrls: ['./add-score.component.scss']
})
export class AddScoreComponent implements OnInit {
  existingPlayerNames: string[];
  selectedPlayerNames: string[] = [];
  addScoreForm = new FormGroup({
    score: new FormControl(null, Validators.required),
    reason: new FormControl(null, Validators.required)
  });

  constructor(private readonly playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayerNames();
    this.addScoreForm.valueChanges.subscribe(
      value =>
        console.log(
          value,
          this.addScoreForm.status,
          this.addScoreForm.valid,
          this.addScoreForm.invalid
        ),
      err => console.error(err)
    );
  }

  getPlayerNames(): void {
    this.playerService
      .getPlayerNames()
      .subscribe((res: string[]) => (this.existingPlayerNames = res));
  }

  togglePlayer(player: string) {
    console.log('form', this.addScoreForm.valid, this.addScoreForm.invalid);
    if (this.selectedPlayerNames.includes(player)) {
      const index = this.selectedPlayerNames.indexOf(player, 0);
      if (index > -1) {
        this.selectedPlayerNames.splice(index, 1);
      }
    } else {
      this.selectedPlayerNames.push(player);
    }
  }

  submitScore() {
    if (this.addScoreForm.valid) {
      'asdf';
    }
  }
}
