import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ItemEntity } from 'src/item/entities/item.entity';

@Entity('item-sub-type')
export class ItemSubTypeEntity {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

//   @OneToMany(() => ItemEntity, item => item.subType)
//   items: ItemEntity[]

}