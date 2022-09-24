import { Injectable, HttpException, HttpCode, HttpStatus  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemTypeDto } from './dto/create-item-type.dto';
import { UpdateItemTypeDto } from './dto/update-item-type.dto';
import { ItemTypeEntity } from './entities/item-type.entity';

@Injectable()
export class ItemTypeService {

  constructor(
    @InjectRepository(ItemTypeEntity)
    private repository: Repository<ItemTypeEntity>,
  ) { }

  async create(CreateItemTypeDto: CreateItemTypeDto) {
    await this.repository.save(CreateItemTypeDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({where: {
      id: id
  }});
  }

  async update(id: number, UpdateItemTypeDto: UpdateItemTypeDto) {
    const item = this.findOne(id)
    if (item) {
      await this.repository.update(id, UpdateItemTypeDto);
    } else {
      throw new HttpException('', HttpStatus.BAD_REQUEST)
    };
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
