import { Injectable, HttpException, HttpCode, HttpStatus  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemSubtypeDto } from './dto/create-item-subtype.dto';
import { UpdateItemSubtypeDto } from './dto/update-item-subtype.dto';
import { ItemSubTypeEntity } from './entities/item-subtype.entity';

@Injectable()
export class ItemSubtypeService {
  constructor(
    @InjectRepository(ItemSubTypeEntity)
    private repository: Repository<ItemSubTypeEntity>,
  ) { }

  async create(CreateItemSubTypeDto: CreateItemSubtypeDto) {
    await this.repository.save(CreateItemSubTypeDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({where: {
      id: id
  }});
  }

  async update(id: number, UpdateItemSubTypeDto: UpdateItemSubtypeDto) {
    const item = this.findOne(id)
    if (item) {
      await this.repository.update(id, UpdateItemSubTypeDto);
    } else {
      throw new HttpException('', HttpStatus.BAD_REQUEST)
    };
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
