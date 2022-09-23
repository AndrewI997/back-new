import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { ItemEntity } from 'src/item/entities/item.entity';

@Entity('item-kind')
export class ItemKindEntity {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

//   @OneToMany(() => ItemEntity, item => item.kind)
//   items: ItemEntity[]

}
