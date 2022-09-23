import { Injectable } from '@nestjs/common';
import { CreateItemKindDto } from './dto/create-item-kind.dto';
import { UpdateItemKindDto } from './dto/update-item-kind.dto';

@Injectable()
export class ItemKindService {
  create(createItemKindDto: CreateItemKindDto) {
    return 'This action adds a new itemKind';
  }

  findAll() {
    return `This action returns all itemKind`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemKind`;
  }

  update(id: number, updateItemKindDto: UpdateItemKindDto) {
    return `This action updates a #${id} itemKind`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemKind`;
  }
}
