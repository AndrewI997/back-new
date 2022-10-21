import { Module } from '@nestjs/common';
import { ItemController } from 'src/item/item.controller';
import { ItemService } from 'src/item/item.service';
import { CacheModule } from '@nestjs/common/cache';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from 'src/item/entities/item.entity';
import { ItemModule } from '../item/item.module'
import { forwardRef } from '@nestjs/common';
// import { FileManagerService } from './file-manager.service';

@Module({
  imports: [forwardRef(() => ItemModule)],
})
export class FileManagerModule {}
