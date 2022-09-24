import { Injectable, HttpException, HttpCode, HttpStatus  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemStyleDto } from './dto/create-item-style.dto';
import { UpdateItemStyleDto } from './dto/update-item-style.dto';
import { ItemStyleEntity } from './entities/item-style.entity';

@Injectable()
export class ItemStylesService {
  constructor(
    @InjectRepository(ItemStyleEntity)
    private repository: Repository<ItemStyleEntity>,
  ) { }

  async create(CreateItemStyleDto: CreateItemStyleDto) {
    await this.repository.save(CreateItemStyleDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({where: {
      id: id
  }});
  }

  async update(id: number, UpdateItemStyleDto: UpdateItemStyleDto) {
    const item = this.findOne(id)
    if (item) {
      await this.repository.update(id, UpdateItemStyleDto);
    } else {
      throw new HttpException('', HttpStatus.BAD_REQUEST)
    };
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
