import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { environment } from '../../environments/environment';
import { Auth } from '../models/auth.interface';
import { Jwt } from '../models/jwt.interface';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authUrl = environment.api.auth;
  private readonly expirationPropertyName = 'expires_at';
  private readonly tokenPropertyName = 'token_id';

  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router
  ) {}

  login(loginData: Auth): any {
    return this.httpClient.post(this.authUrl, loginData).subscribe(
      (res: Jwt) => {
        this.setSession(res);
        this.router.navigate(['admin']);
      },
      (err: any) => {
        alert('ERROR!');
      }
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenPropertyName);
    localStorage.removeItem(this.expirationPropertyName);
    this.isLoggedIn$.next(false);
  }

  private setSession(jwtResponse: Jwt): void {
    const expiresAt = moment().add(jwtResponse.expiresIn, 'seconds');
    localStorage.setItem(this.tokenPropertyName, jwtResponse.token);
    localStorage.setItem(
      this.expirationPropertyName,
      JSON.stringify(expiresAt.valueOf())
    );
    this.isLoggedIn$.next(true);
  }

  isExpirationValid(): boolean {
    const isValid = moment().isBefore(this.getExpiration());
    this.isLoggedIn$.next(isValid);
    return isValid;
  }

  private getExpiration(): moment.Moment {
    const expiresAt = JSON.parse(
      localStorage.getItem(this.expirationPropertyName)
    );
    return moment(expiresAt);
  }
}
