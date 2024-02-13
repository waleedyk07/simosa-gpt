import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface MessageHttpRequest {
	msg: string
}

export interface MessageHttpResponse {
	reply: string
}

@Injectable({
	providedIn: 'root'
})
export class IvanGptClientService {

	constructor(private httpClient: HttpClient) { }

	private IVAN_GPT_URL = 'http://127.0.0.0:5000/chat';

	sendMessage(message: string): Observable<MessageHttpResponse> {
		let req: MessageHttpRequest = {
			msg: message
		};
		return this.httpClient.post<MessageHttpResponse>(this.IVAN_GPT_URL, req)

	}
}

