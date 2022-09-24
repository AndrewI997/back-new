import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { ItemEntity } from 'src/item/entities/item.entity';

@Entity('style')
export class ItemStyleEntity {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

//   @OneToMany(() => ItemEntity, item => item.style)
//   items: ItemEntity[]

}
