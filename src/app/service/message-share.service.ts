import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from '../message';

@Injectable({
	providedIn: 'root'
})
export class MessageShareService {

	constructor() { }

	private message: Subject<Message> = new Subject<Message>();
	newMessage: Observable<Message> = this.message.asObservable();

	shareMessage(message: Message) {
		this.message.next(message);
	}


}
