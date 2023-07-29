import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirstServService {
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'novan',
      email: 'novan@mail.com',
      message: 'hello',
    });
    this.insert({
      name: 'john',
      email: 'john@mail.com',
      message: 'hello john',
    });
    this.insert({
      name: 'jane',
      email: 'jane@mail.com',
      message: 'hello jane',
    });
  }

  insert(message: { name: string; email: string; message: string }): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
