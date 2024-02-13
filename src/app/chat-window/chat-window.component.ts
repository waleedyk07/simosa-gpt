import { Component, OnInit } from '@angular/core';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { CommonModule } from '@angular/common';
import { MessageShareService } from '../service/message-share.service';
import { Message } from '../message';

@Component({
	selector: 'app-chat-window',
	standalone: true,
	imports: [CommonModule, ChatMessageComponent],
	templateUrl: './chat-window.component.html',
	styleUrl: './chat-window.component.scss'
})
export class ChatWindowComponent implements OnInit{

	constructor(private messageShareService: MessageShareService) { }
	
	messages: Message[] = [];
	
	ngOnInit(): void {
		this.messageShareService.newMessage.subscribe(message => this.messages.push(message));
	}
}
