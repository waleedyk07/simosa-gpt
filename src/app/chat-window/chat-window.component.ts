import { Component, OnInit } from '@angular/core';
import { ChatMessageComponent } from '../chat-message/chat-message.component';
import { CommonModule } from '@angular/common';
import { MessageShareService } from '../service/message-share.service';
import { Message, Sender } from '../message';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-chat-window',
	standalone: true,
	imports: [CommonModule, ChatMessageComponent],
	templateUrl: './chat-window.component.html',
	styleUrl: './chat-window.component.scss'
})
export class ChatWindowComponent implements OnInit {

	constructor(private messageShareService: MessageShareService) { }

	messages: Message[] = [];
	$isLoading: Observable<Boolean> = this.messageShareService.isLoading;

	private WELCOME_MESSAGE: string = "Welcome, I'm SIMOSA GPT. How can I help you?";
	private WELCOME: Message = {
		from: Sender.Bot,
		message: this.WELCOME_MESSAGE
	}

	ngOnInit(): void {
		this.messageShareService.newMessage.subscribe(message => this.messages.push(message));

		// Welcome Message
		this.messages.push(this.WELCOME);
	}
}
