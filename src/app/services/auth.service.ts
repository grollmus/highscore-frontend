import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { environment } from '../../environments/environment';
import { Auth } from '../models/auth.interface';
import { Jwt } from '../models/jwt.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authUrl = environment.api.auth;
  constructor(private readonly httpClient: HttpClient) {}

  login(loginData: Auth): void {
    this.httpClient
      .post(this.authUrl, loginData)
      .subscribe((res: Jwt) => this.setSession(res));
  }

  logout(): void {
    localStorage.removeItem('token_id');
    localStorage.removeItem('expires_at');
  }

  private setSession(jwtResponse: Jwt): void {
    const expiresAt = moment().add(jwtResponse.expiresIn, 'seconds');
    localStorage.setItem('token_id', jwtResponse.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  private getExpiration(): moment.Moment {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return moment(expiresAt);
  }
}
