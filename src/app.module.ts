import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service'

import { ItemEntity } from './item/entities/item.entity';
import { ItemTypeEntity } from './item-type/entities/item-type.entity';
import { ItemSubTypeEntity } from './item-subtype/entities/item-subtype.entity';
import { ItemKindEntity } from './item-kind/entities/item-kind.entity';
import { ItemStyleEntity } from './item-style/entities/item-style.entity';

import { ItemModule } from './item/item.module';
import { ItemTypeModule } from './item-type/item-type.module';
import { ItemSubtypeModule } from './item-subtype/item-subtype.module';
import { ItemKindModule } from './item-kind/item-kind.module';
import { ItemStyleModule } from './item-style/item-style.module';

import { PhoneNumbersModule } from './phone-numbers/phone-numbers.module';
import { PhotoGalleryModule } from './photo-gallery/photo-gallery.module';

import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5000,
      username: 'postgres',
      password: 'output44w',
      database: 'drugayamebel2',
      entities: [
        ItemEntity,
        ItemTypeEntity,
        ItemSubTypeEntity,
        ItemKindEntity,
        ItemStyleEntity,
      ],
      synchronize: true,
    }),
    ItemModule,
    ItemTypeModule,
    ItemSubtypeModule,
    ItemKindModule,
    ItemStyleModule,
    PhoneNumbersModule,
    PhotoGalleryModule,
    AuthModule,
    AdminModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
