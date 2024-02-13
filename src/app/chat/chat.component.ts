import { Component, ElementRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { ChatInputComponent } from '../chat-input/chat-input.component';

@Component({
	selector: 'app-chat',
	standalone: true,
	imports: [ChatWindowComponent, ChatInputComponent],
	templateUrl: './chat.component.html',
	styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
