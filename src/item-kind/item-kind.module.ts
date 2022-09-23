import { Module } from '@nestjs/common';
import { ItemKindService } from './item-kind.service';
import { ItemKindController } from './item-kind.controller';

@Module({
  controllers: [ItemKindController],
  providers: [ItemKindService]
})
export class ItemKindModule {}
