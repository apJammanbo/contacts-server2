import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from '.prisma/client';
import { Prisma } from '@prisma/client';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  async getAll(): Promise<Contact[]> {
    return await this.contactsService.getAll();
  }

  @Get('/:id')
  async get(@Param('id') id): Promise<Contact> {
    return await this.contactsService.get(Number(id));
  }

  @Post()
  async create(
    @Body() createConatactInput: Prisma.ContactCreateInput,
  ): Promise<Contact> {
    return await this.contactsService.create(createConatactInput);
  }

  @Delete('/:id')
  delete(@Param('id') id) {
    return this.contactsService.delete(Number(id));
  }

  @Put('/:id')
  update(
    @Param('id') id,
    @Body() contactUpdateInput: Prisma.ContactUpdateInput,
  ) {
    return this.contactsService.update(Number(id), contactUpdateInput);
  }
}
