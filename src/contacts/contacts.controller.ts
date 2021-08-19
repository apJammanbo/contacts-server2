import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  getAll() {
    return 'get all';
  }

  @Get('/:id')
  get(@Param('id') id) {
    return `get id: ${id}`;
  }

  @Post()
  create() {
    return `create`;
  }

  @Delete()
  delete() {
    return `delete`;
  }

  @Put()
  update() {
    return `update`;
  }
}
