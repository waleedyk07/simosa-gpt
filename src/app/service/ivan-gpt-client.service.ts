import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, of, throwError } from 'rxjs';
import { MessageShareService } from './message-share.service';

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

	constructor(private httpClient: HttpClient, private messageShareService: MessageShareService) { }

	// Local
	// private IVAN_GPT_URL = 'http://127.0.0.0:5000/chat';
	
	// Production Without LB
	// private IVAN_GPT_URL = 'http://ec2-18-234-52-123.compute-1.amazonaws.com:5000/chat';
	
	// Production With LB
	private IVAN_GPT_URL = 'http://simosa-backend-env.eba-52rxsarm.us-east-1.elasticbeanstalk.com/chat';

	sendMessage(message: string): Observable<MessageHttpResponse> {

		let req: MessageHttpRequest = {
			msg: message
		};

		this.messageShareService.setLoader(true);
		return this.httpClient.post<MessageHttpResponse>(this.IVAN_GPT_URL, req)
			.pipe(
				finalize(
					() => this.messageShareService.setLoader(false)
				)
			);
	}
}

