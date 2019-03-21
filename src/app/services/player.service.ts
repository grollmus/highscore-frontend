import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from '../models/player.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayerService {

  private apiUrl = 'http://highscore.grollmus.local:3000/players';

  private playerSubject: BehaviorSubject<Player[]>;
  players: Observable<Player[]>;

  constructor(private readonly httpClient: HttpClient) {
    this.playerSubject = new BehaviorSubject([]);
    this.players = this.playerSubject.asObservable();
  }

  fetchAllPlayers() {
    this.httpClient.get<Player[]>(this.apiUrl).subscribe(p => {
      this.playerSubject.next(p);
    });
  }

  addPlayer(name: string) {
    this.httpClient.post<Player>(this.apiUrl, {
      name,
    }).subscribe(p => {
      const newPlayers = this.playerSubject.value;
      newPlayers.push(p);
      this.playerSubject.next(newPlayers);
    });
  }

  addScore(playerId: string, reason: string, score: number) {
    this.httpClient.post<Player>(`${this.apiUrl}/${playerId}/scores`, {
      score,
      reason
    }).subscribe(p => {
      const players = this.playerSubject.value;
      const updatePlayer = players.findIndex(player => player._id === p._id);
      players[updatePlayer] = p;
      this.playerSubject.next(players);
    });
  }

  deletePlayer(playerId: string) {
    this.httpClient.delete<boolean>(`${this.apiUrl}/${playerId}`).subscribe(x => {
      if (x) {
        const players = this.playerSubject.value;
        const deletedPlayerIndex = players.findIndex(player => player._id === playerId);
        players.splice(deletedPlayerIndex, 1);
        this.playerSubject.next(players);
      }
    });
  }
}
