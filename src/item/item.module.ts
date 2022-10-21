import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/common/cache';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileManagerModule } from 'src/file-manager/file-manager.module';

import { ItemEntity } from './entities/item.entity';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity]), CacheModule.register(), FileManagerModule],
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
