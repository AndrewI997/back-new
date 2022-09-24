import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ItemEntity } from './entities/item.entity'
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    public repository: Repository<ItemEntity>,
  ) { }

  async create(createItemDto: CreateItemDto) {
    await this.repository.save(createItemDto);
  }

  findAll() {
    return this.repository.find({
      relations: {
          type: true,
          subType: true,
          style: true,
          kind: true
      },
  });
  }

  findOne(item: Partial<CreateItemDto>) {
    return this.repository.findOne({
      where: {
        id: item.id
      },
      relations: {
        type: true,
        subType: true,
        style: true,
        kind: true
    }
    });
  }

  findByType(item: Partial<CreateItemDto>) {
    return this.repository.find({
      where: {
        type: {
          id: item.typeId
        }
      },
      relations: {
        type: true,
        subType: true,
        style: true,
        kind: true
    }
    })
  }

  findBySubTypeId(item: Partial<CreateItemDto>) {
    return this.repository.find({
      where: {
        type: {
          id: item.typeId
        },
        subType: {
          id: item.subTypeId
        }
      },
      relations: {
        type: true,
        subType: true,
        style: true,
        kind: true
    }
    });
  }
  

  findByStyleId(item: Partial<CreateItemDto>) {
    return this.repository.find({
      where: {
        type: {
          id: item.typeId
        },
        subType: {
          id: item.subTypeId
        },
        style: {
          id: item.styleId
        }
      },
      relations: {
        type: true,
        subType: true,
        style: true,
        kind: true
    }
    });
  }

  findByKindId(item: Partial<CreateItemDto>) {
    return this.repository.find({
      where: {
        type: {
          id: item.typeId
        },
        subType: {
          id: item.subTypeId
        },
        style: {
          id: item.styleId
        },
        kind: {
          id: item.kindId
        }
      },
      relations: {
        type: true,
        subType: true,
        style: true,
        kind: true
    }
    });
  }

  async update(item: Partial<CreateItemDto>, updateItemDto: UpdateItemDto) {
    const itemById = this.findOne(item)
    if (itemById) {
      await this.repository.update(item, updateItemDto);
    } else {
      throw new HttpException('', HttpStatus.BAD_REQUEST)
    };
  }

  async remove(item: Partial<CreateItemDto>) {
    const itemById = this.findOne(item)
    if (itemById) {
      await this.repository.delete(item);;
    } else {
      throw new HttpException('', HttpStatus.BAD_REQUEST)
    };
  }
}
