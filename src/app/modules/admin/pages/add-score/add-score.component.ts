import { Component, OnInit } from '@angular/core';
import { PlayerService } from '@app/services';

@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.component.html',
  styleUrls: ['./add-score.component.scss']
})
export class AddScoreComponent implements OnInit {
  existingPlayerNames: string[];
  selectedPlayerNames: string[] = [];
  constructor(private readonly playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayerNames();
  }

  getPlayerNames(): void {
    this.playerService
      .getPlayerNames()
      .subscribe((res: string[]) => (this.existingPlayerNames = res));
  }

  togglePlayer(player: string) {
    if (this.selectedPlayerNames.includes(player)) {
      const index = this.selectedPlayerNames.indexOf(player, 0);
      if (index > -1) {
        this.selectedPlayerNames.splice(index, 1);
      }
    } else {
      this.selectedPlayerNames.push(player);
    }
  }
}
