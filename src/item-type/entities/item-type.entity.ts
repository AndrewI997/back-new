import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('type')
export class ItemTypeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}
