export enum Sender {
	User,
	Bot
}

export interface Message {
	from: Sender
	message: string
}
