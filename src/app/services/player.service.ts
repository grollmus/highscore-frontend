import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Player } from '@app/models';

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

  fetchAllPlayers() {
    this.httpClient.get<Player[]>(this.apiUrl).subscribe(response => {
      this.playerSubject.next(response);
    });
  }

  addPlayer(name: string) {
    this.httpClient
      .post<Player>(this.apiUrl, {
        name
      })
      .subscribe(p => {
        const newPlayers = this.playerSubject.value;
        newPlayers.push(p);
        this.playerSubject.next(newPlayers);
      });
  }

  addScore(playerId: string, reason: string, score: number) {
    this.httpClient
      .post<Player>(`${this.apiUrl}/${playerId}/scores`, {
        score,
        reason
      })
      .subscribe(p => {
        const players = this.playerSubject.value;
        const updatePlayer = players.findIndex(player => player._id === p._id);
        players[updatePlayer] = p;
        this.playerSubject.next(players);
      });
  }

  deletePlayer(playerId: string) {
    this.httpClient
      .delete<boolean>(`${this.apiUrl}/${playerId}`)
      .subscribe(x => {
        if (x) {
          const players = this.playerSubject.value;
          const deletedPlayerIndex = players.findIndex(
            player => player._id === playerId
          );
          players.splice(deletedPlayerIndex, 1);
          this.playerSubject.next(players);
        }
      });
  }
}
