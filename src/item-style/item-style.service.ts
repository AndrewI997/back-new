import { Injectable } from '@nestjs/common';
import { CreateItemStyleDto } from './dto/create-item-style.dto';
import { UpdateItemStyleDto } from './dto/update-item-style.dto';

@Injectable()
export class ItemStyleService {
  create(createItemStyleDto: CreateItemStyleDto) {
    return 'This action adds a new itemStyle';
  }

  findAll() {
    return `This action returns all itemStyle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemStyle`;
  }

  update(id: number, updateItemStyleDto: UpdateItemStyleDto) {
    return `This action updates a #${id} itemStyle`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemStyle`;
  }
}
