import { ItemEntity } from './item/entities/item.entity';
import { ItemTypeEntity } from './item-type/entities/item-type.entity';
import { ItemSubTypeEntity } from './item-subtype/entities/item-subtype.entity';
import { ItemKindEntity } from './item-kind/entities/item-kind.entity';
import { ItemStyleEntity } from './item-style/entities/item-style.entity';
import { PhoneNumberEntity } from './phone-numbers/entities/phone-number.entity';
import { AdminEntity } from './admin/entities/admin.entity';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                type: 'postgres',
                host: config.get('PG_HOST'),
                port: config.get('PG_PORT'),
                username: config.get('PG_USERNAME'),
                password: config.get('PG_PASS'),
                database: config.get('PG_DBNAME'),
                entities: [
                    ItemEntity,
                    ItemTypeEntity,
                    ItemSubTypeEntity,
                    ItemKindEntity,
                    ItemStyleEntity,
                    PhoneNumberEntity,
                    AdminEntity,
                ],
                synchronize: true,
            })
        })
    ]
})

export class DBModule {}