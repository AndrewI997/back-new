import { Module } from '@nestjs/common';
import { ItemSubtypeService } from './item-subtype.service';
import { ItemSubtypeController } from './item-subtype.controller';

@Module({
  controllers: [ItemSubtypeController],
  providers: [ItemSubtypeService]
})
export class ItemSubtypeModule {}
