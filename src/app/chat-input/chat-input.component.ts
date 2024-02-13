import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageShareService } from '../service/message-share.service';
import { IvanGptClientService } from '../service/ivan-gpt-client.service';
import { Sender } from '../message';

@Component({
	selector: 'app-chat-input',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './chat-input.component.html',
	styleUrl: './chat-input.component.scss'
})
export class ChatInputComponent implements AfterViewInit{

	constructor(private messageShareService: MessageShareService, private ivanGptClientService: IvanGptClientService) { }

	@ViewChild("messageInputField") messageInputField!: any;
	newMessage: string = '';

	ngAfterViewInit(): void {
		this.messageInputField.nativeElement.focus();
	}


	sendMessage() {
		if (this.newMessage != '') {
			this.messageShareService.shareMessage({ from: Sender.User, message: this.newMessage });
			this.ivanGptClientService.sendMessage(this.newMessage).subscribe(
				response => this.messageShareService.shareMessage({ from: Sender.Bot, message: response.reply })
			);
			this.newMessage = ''; // clear message once sent
		}
		this.messageInputField.nativeElement.focus();
	}
}

