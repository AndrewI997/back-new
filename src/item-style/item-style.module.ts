import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemStyleEntity } from './entities/item-style.entity';
import { ItemStyleService } from './item-style.service';
import { ItemStyleController } from './item-style.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ItemStyleEntity])],
  controllers: [ItemStyleController],
  providers: [ItemStyleService]
})
export class ItemStyleModule {}
