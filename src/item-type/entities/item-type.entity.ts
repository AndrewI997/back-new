import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ItemEntity } from '../../item/entities/item.entity'

@Entity('item-type')
export class ItemTypeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @OneToMany(() => ItemEntity, item => item.type)
    // items: ItemEntity[]

}
