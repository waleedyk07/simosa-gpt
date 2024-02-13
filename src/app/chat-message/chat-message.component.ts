import { Component, Input } from '@angular/core';
import { Message } from '../message';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-chat-message',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './chat-message.component.html',
	styleUrl: './chat-message.component.scss'
})
export class ChatMessageComponent {
	@Input() message: Message | null = null;
}
