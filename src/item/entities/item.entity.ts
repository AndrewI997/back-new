import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

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

    @ManyToOne(() => ItemTypeEntity, type => type.id)
    @JoinColumn({ name: "typeId" })
    type: ItemTypeEntity

    
    @ManyToOne(() => ItemSubTypeEntity, subType => subType.id)
    @JoinColumn({ name: "subTypeId" })
    subType: ItemSubTypeEntity

    @ManyToOne(() => ItemStyleEntity, style => style.id)
    @JoinColumn({ name: "styleId" })
    style: ItemStyleEntity

    @ManyToOne(() => ItemKindEntity, kind => kind.id, { nullable: true })
    @JoinColumn({ name: "kindId" })
    kind: ItemKindEntity

}
