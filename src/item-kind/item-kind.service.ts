import { Injectable, HttpException, HttpCode, HttpStatus  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemKindDto } from './dto/create-item-kind.dto';
import { UpdateItemKindDto } from './dto/update-item-kind.dto';
import { ItemKindEntity } from './entities/item-kind.entity';

@Injectable()
export class ItemKindService {
  constructor(
    @InjectRepository(ItemKindEntity)
    private repository: Repository<ItemKindEntity>,
  ) { }

  async create(CreateItemKindDto: CreateItemKindDto) {
    await this.repository.save(CreateItemKindDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({where: {
      id: id
  }});
  }

  async update(id: number, UpdateItemKindDto: UpdateItemKindDto) {
    const item = this.findOne(id)
    if (item) {
      await this.repository.update(id, UpdateItemKindDto);
    } else {
      throw new HttpException('', HttpStatus.BAD_REQUEST)
    };
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
