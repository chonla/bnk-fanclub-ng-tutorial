import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Feed } from '../models/feed';

@Injectable({
  providedIn: 'root'
})
export class BnkService {

  constructor(private http: HttpClient) { }

  list(): Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.api_url}/bnk/members`);
  }

  instagram(id: string): Observable<Feed> {
    return this.http.get<Feed>(`${environment.instagram_api_url}${id}`);
  }

  get(id: string): Observable<Member> {
    return this.http.get<Member>(`${environment.api_url}/bnk/members/${id}`);
  }

  save(id: string, data: Member): Observable<Object> {
    return this.http.patch<Object>(`${environment.api_url}/bnk/members/${id}`, data);
  }
}
