import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArchiveService } from '@app/services/archive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archive-board',
  templateUrl: './archive-board.component.html',
  styleUrls: ['./archive-board.component.scss']
})
export class ArchiveBoardComponent implements OnInit {
  archiveBoard = new FormGroup({
    name: new FormControl(null, Validators.required),
    year: new FormControl(null, Validators.required)
  });

  constructor(
    private readonly archiveService: ArchiveService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  submit() {
    this.archiveService
      .archiveBoard(this.archiveBoard.value.name, this.archiveBoard.value.year)
      .subscribe(
        res => {
          console.log('boom', res);
          this.router.navigate(['admin']);
        },
        err => console.error(err)
      );
  }
}
