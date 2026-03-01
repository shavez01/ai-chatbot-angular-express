import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat } from '../../shared/models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl = 'http://localhost:5000/api/chat';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<Chat> {
    return this.http.post<Chat>(this.baseUrl, { message });
  }

  getHistory(): Observable<Chat[]> {
    return this.http.get<Chat[]>(`${this.baseUrl}/history`);
  }
}