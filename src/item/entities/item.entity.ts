import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index } from 'typeorm';

import { ItemTypeEntity } from 'src/item-type/entities/item-type.entity';
import { ItemSubTypeEntity } from 'src/item-subtype/entities/item-subtype.entity';
import { ItemStyleEntity } from 'src/item-style/entities/item-style.entity';
import { ItemKindEntity } from 'src/item-kind/entities/item-kind.entity';

@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column({default: 0})
    price: number;

    @Column({default: 0, nullable: true})
    raiting: number;

    @Column({ nullable: true })
    description?: string;

    @Index()
    @ManyToOne(() => ItemTypeEntity, type => type.id)
    type: ItemTypeEntity

    @Index()
    @ManyToOne(() => ItemSubTypeEntity, subType => subType.id)
    subType: ItemSubTypeEntity

    @Index()
    @ManyToOne(() => ItemKindEntity, kind => kind.id, { nullable: true })
    kind: ItemKindEntity

    @Index()
    @ManyToOne(() => ItemStyleEntity, style => style.id)
    style: ItemStyleEntity

}
