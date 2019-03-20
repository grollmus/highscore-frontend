import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../models/player.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayerService {

  private apiUrl = 'http://localhost:3000/players';

  constructor(private readonly httpClient: HttpClient) {
  }

  getAllUser() {
    return this.httpClient.get<Player[]>(this.apiUrl);
  }
}
