import { Injectable, Inject, HttpException, HttpStatus, CACHE_MANAGER } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cache } from 'cache-manager';

import { ItemEntity } from './entities/item.entity'
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';


@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    public repository: Repository<ItemEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) { }

  async create(createItemDto: CreateItemDto, images: any) {
    // console.log(images)
    
    const item = await this.repository.save({...createItemDto, images})
    return item
  }

  async findAll() {
    const cahedData = await this.cacheManager.store.get<CreateItemDto>()
    if (cahedData) {
      return cahedData
    } else {
      return await this.repository.find({
        relations: {
          type: true,
          subType: true,
          style: true,
          kind: true,
          // images: true
        },
      });
    }
  }

  async findOne(item: Partial<CreateItemDto>) {
    const cahedData = await this.cacheManager.store.get<CreateItemDto>(item)
    if (cahedData) {
      return cahedData
    } else {
      return await this.repository.findOne({
        where: {
          id: item.id
        },
        relations: {
          type: true,
          subType: true,
          style: true,
          kind: true,
        }
      });
    }
  }

  async findByType(item: Partial<CreateItemDto>) {

    const cahedData = await this.cacheManager.store.get<CreateItemDto>(item)
    if (cahedData) {
      return cahedData
    } else {
      return await this.repository.find({
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
  }


  async findBySubTypeId(item: Partial<CreateItemDto>) {
    const cahedData = await this.cacheManager.store.get<CreateItemDto>(item)
    if (cahedData) {
      return cahedData
    } else {
      return await this.repository.find({
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
  }

  async findByTypeStyleId(item: Partial<CreateItemDto>) {

    const cahedData = await this.cacheManager.store.get<CreateItemDto>(item)
    if (cahedData) {
      return cahedData
    } else {
      return await this.repository.find({
        where: {
          type: {
            id: item.typeId
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
      })
    }
  }


  async findByTypeSubTypeId(item: Partial<CreateItemDto>) {
    const cahedData = await this.cacheManager.store.get<CreateItemDto>(item)
    if (cahedData) {
      return cahedData
    } else {
      return await this.repository.find({
        where: {
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
  }

  async findByTypeSubTypeStyleId(item: Partial<CreateItemDto>) {
    const cahedData = await this.cacheManager.store.get<CreateItemDto>(item)
    if (cahedData) {
      return cahedData
    } else {
      return await this.repository.find({
        where: {
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
  }


  async findByStyleId(item: Partial<CreateItemDto>) {
    const cahedData = await this.cacheManager.store.get<CreateItemDto>(item)
    if (cahedData) {
      return cahedData
    } else {
      return await this.repository.find({
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
  }

  async findStyleByStyleId(item: Partial<CreateItemDto>) {
    const cahedData = await this.cacheManager.store.get<CreateItemDto>(item)
    if (cahedData) {
      return cahedData
    } else {
      return await this.repository.find({
        where: {
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
  }


  async findByKindId(item: Partial<CreateItemDto>) {
    const cahedData = await this.cacheManager.store.get<CreateItemDto>(item)
    if (cahedData) {
      return cahedData
    } else {
      return await this.repository.find({
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
  }

  // async update(item: Partial<CreateItemDto>, updateItemDto: UpdateItemDto) {
  //   const itemById = this.findOne(item)
  //   if (itemById) {
  //     await this.repository.update(item, updateItemDto);
  //   } else {
  //     throw new HttpException('', HttpStatus.BAD_REQUEST)
  //   };
  // }

  // async remove(item: Partial<CreateItemDto>) {
  //   const itemById = this.findOne(item)
  //   if (itemById) {
  //     await this.repository.delete(item);;
  //   } else {
  //     throw new HttpException('', HttpStatus.BAD_REQUEST)
  //   };
  // }
}
