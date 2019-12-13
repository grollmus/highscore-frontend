import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArchiveService } from '@app/services/archive.service';

@Component({
  selector: 'app-archive-board',
  templateUrl: './archive-board.component.html',
  styleUrls: ['./archive-board.component.scss']
})
export class ArchiveBoardComponent implements OnInit {
  currentYear = new Date().getFullYear();
  archiveBoard = new FormGroup({
    name: new FormControl(null, Validators.required),
    year: new FormControl(null, [
      Validators.required,
      Validators.min(this.currentYear)
    ])
  });

  constructor(private readonly archiveService: ArchiveService) {}

  ngOnInit() {}

  submit() {
    this.archiveService
      .archiveBoard(this.archiveBoard.value.name, this.archiveBoard.value.year)
      .subscribe(
        res => {
          console.log('boom');
        },
        err => console.error(err)
      );
  }
}
