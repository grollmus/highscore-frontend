import { Component, OnInit } from '@angular/core';
import { ArchiveService } from '@app/services/archive.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '@app/models';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  constructor(
    private readonly archiveService: ArchiveService,
    private readonly route: ActivatedRoute
  ) {}
  players = [];

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const idString = 'id';
      const id = params[idString];
      this.archiveService.getArchiveById(id).subscribe((archive: any) => {
        this.players = archive.players
          .sort((a: Player, b: Player) => {
            if (a.totalScore > b.totalScore) {
              return 1;
            } else if (a.totalScore < b.totalScore) {
              return -1;
            }
            return 0;
          })
          .reverse();
      });
    });
  }
}
