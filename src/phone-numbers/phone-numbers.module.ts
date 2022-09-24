import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhoneNumberEntity } from './entities/phone-number.entity';
import { PhoneNumbersService } from './phone-numbers.service';
import { PhoneNumbersController } from './phone-numbers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PhoneNumberEntity])],
  controllers: [PhoneNumbersController],
  providers: [PhoneNumbersService]
})
export class PhoneNumbersModule {}
