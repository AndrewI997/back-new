import { Module } from '@nestjs/common';
import { ItemStyleService } from './item-style.service';
import { ItemStyleController } from './item-style.controller';

@Module({
  controllers: [ItemStyleController],
  providers: [ItemStyleService]
})
export class ItemStyleModule {}
