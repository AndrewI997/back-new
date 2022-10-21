import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index, OneToMany } from 'typeorm';

import { ItemTypeEntity } from 'src/item-type/entities/item-type.entity';
import { ItemSubTypeEntity } from 'src/item-subtype/entities/item-subtype.entity';
import { ItemStyleEntity } from 'src/item-style/entities/item-style.entity';
import { ItemKindEntity } from 'src/item-kind/entities/item-kind.entity';

@Entity('item')
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ nullable: true })
    name: string;

    @Column({default: 0})
    price: number;

    @Column({ nullable: true })
    description?: string;

    @Column({type: 'text', array: true, nullable: true})
    images: string[];

    @ManyToOne(() => ItemTypeEntity, type => type.id)
    type: ItemTypeEntity

    @ManyToOne(() => ItemSubTypeEntity, subType => subType.id)
    subType: ItemSubTypeEntity

    @ManyToOne(() => ItemKindEntity, kind => kind.id, { nullable: true })
    kind: ItemKindEntity

    @ManyToOne(() => ItemStyleEntity, style => style.id, { nullable: true })
    style: ItemStyleEntity

    

}
