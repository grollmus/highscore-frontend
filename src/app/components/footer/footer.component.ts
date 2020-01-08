import { Component, OnInit } from '@angular/core';
import { version } from '../../../../package.json';
import { ArchiveService } from '@app/services/archive.service.js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version = version;
  archives = [];

  constructor(private readonly archiveService: ArchiveService) {}

  ngOnInit() {
    this.archiveService
      .getArchives()
      .subscribe((archive: any) => (this.archives = archive));
  }
}
