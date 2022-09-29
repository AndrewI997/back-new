import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/common/cache';
import { ClientOpts } from 'redis';
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
import { UserModule } from './user/user.module';

import { DBModule } from './db.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register<ClientOpts>({
      // imports: [ConfigModule],
      // inject: [ConfigService],
      // useFactory: async (config: ConfigService) => ({
        isGlobal: true,
        store: redisStore,
        host: 'localhost',//config.get('REDIS_HOST'),
        port: 6379,//config.get('REDIS_PORT'),
        ttl: 20,
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
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }

