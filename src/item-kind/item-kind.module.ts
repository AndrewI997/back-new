import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemKindEntity } from './entities/item-kind.entity';
import { ItemKindService } from './item-kind.service';
import { ItemKindController } from './item-kind.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ItemKindEntity])],
  controllers: [ItemKindController],
  providers: [ItemKindService]
})
export class ItemKindModule {}
