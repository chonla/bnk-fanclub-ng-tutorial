import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthResponse } from '../models/auth-response';
import { Credential } from '../models/credential';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  constructor(private http: HttpClient) { }

  authen(credential: Credential): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.api_url}/auth/login`, credential);
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isLogin(): boolean {
    return !!this.token;
  }
}
