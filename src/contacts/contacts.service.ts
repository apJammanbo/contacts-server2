import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  getHello(): string {
    return 'Hello Contacts!';
  }
}
