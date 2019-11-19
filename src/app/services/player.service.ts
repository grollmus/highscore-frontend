import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Player } from '@app/models';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PlayerService {
  private apiUrl = environment.api.players;
  private readonly playersApiUrl = environment.api.players;

  private playerSubject: BehaviorSubject<Player[]>;
  players: Observable<Player[]>;

  constructor(private readonly httpClient: HttpClient) {
    this.playerSubject = new BehaviorSubject([]);
    this.players = this.playerSubject.asObservable();
  }

  getAllPlayers() {
    return this.httpClient.get(this.playersApiUrl);
  }

  getPlayerNames() {
    return this.httpClient.get(`${this.playersApiUrl}/names`);
  }

  fetchAllPlayers() {
    this.httpClient.get<Player[]>(this.apiUrl).subscribe(response => {
      this.playerSubject.next(response);
    });
  }

  addPlayers(names: any): Observable<any> {
    return this.httpClient.post(this.playersApiUrl, names);
  }

  addScore(playerId: string, reason: string, score: number) {
    return this.httpClient.post<Player>(`${this.apiUrl}/${playerId}/scores`, {
      score,
      reason
    });
  }

  deletePlayer(playerId: string) {
    return this.httpClient.delete<boolean>(`${this.apiUrl}/${playerId}`);
  }
}
