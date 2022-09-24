import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ItemSubTypeEntity } from './entities/item-subtype.entity';
import { ItemSubtypeService } from './item-subtype.service';
import { ItemSubtypeController } from './item-subtype.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ItemSubTypeEntity])],
  controllers: [ItemSubtypeController],
  providers: [ItemSubtypeService]
})
export class ItemSubtypeModule {}
