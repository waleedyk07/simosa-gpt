import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Message } from '../message';

@Injectable({
	providedIn: 'root'
})
export class MessageShareService {

	constructor() { }

	private message: Subject<Message> = new Subject<Message>();
	newMessage: Observable<Message> = this.message.asObservable();

	private isLoadingSubject: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
	isLoading: Observable<Boolean> = this.isLoadingSubject.asObservable();

	shareMessage(message: Message) {
		this.message.next(message);
	}

	setLoader(flag: boolean) {
		this.isLoadingSubject.next(flag);
	}

}
