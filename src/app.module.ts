import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import * as Joi from '@hapi/joi';

import { AppController } from './app.controller';
import { AppService } from './app.service'

import { ItemModule } from './item/item.module';
import { ItemTypeModule } from './item-type/item-type.module';
import { ItemSubtypeModule } from './item-subtype/item-subtype.module';
import { ItemKindModule } from './item-kind/item-kind.module';
import { ItemStyleModule } from './item-style/item-style.module';

import { PhoneNumbersModule } from './phone-numbers/phone-numbers.module';
import { PhotoGalleryModule } from './photo-gallery/photo-gallery.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

import { DBModule } from './db.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      // validationSchema: Joi.object({
      //   PG_HOST: Joi.string().required(),
      //   PG_PORT: Joi.number().required(),
      //   PG_USERNAME: Joi.string().required(),
      //   PG_PASS: Joi.string().required(),
      //   PG_DBNAME: Joi.string().required(),
      // })
    }),
    DBModule,
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

