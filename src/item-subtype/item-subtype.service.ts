import { Injectable } from '@nestjs/common';
import { CreateItemSubtypeDto } from './dto/create-item-subtype.dto';
import { UpdateItemSubtypeDto } from './dto/update-item-subtype.dto';

@Injectable()
export class ItemSubtypeService {
  create(createItemSubtypeDto: CreateItemSubtypeDto) {
    return 'This action adds a new itemSubtype';
  }

  findAll() {
    return `This action returns all itemSubtype`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemSubtype`;
  }

  update(id: number, updateItemSubtypeDto: UpdateItemSubtypeDto) {
    return `This action updates a #${id} itemSubtype`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemSubtype`;
  }
}
