import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../core/services/chat';
import { Chat } from '../../shared/models/chat.model';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
  styleUrls: ['./chat.scss']
})
export class ChatComponent implements OnInit {

  message = '';
  messages: Chat[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  sendMessage(): void {
    if (!this.message.trim()) return;

    this.chatService.sendMessage(this.message)
      .subscribe(response => {
        this.messages.push(response);
        this.message = '';
      });
  }

  loadHistory(): void {
    this.chatService.getHistory()
      .subscribe(data => {
        this.messages = data;
      });
  }
}