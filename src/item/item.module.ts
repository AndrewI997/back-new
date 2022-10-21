import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/common/cache';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef } from '@nestjs/common';

import { ItemEntity } from './entities/item.entity';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
// import { FileManagerService } from 'src/file-manager/file-manager.service';


@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity]), CacheModule.register()],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
