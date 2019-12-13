import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  constructor(private readonly httpClient: HttpClient) {}

  archiveBoard(name: string, year: number) {
    return this.httpClient.post(environment.api.archive, { name, year });
  }
}
