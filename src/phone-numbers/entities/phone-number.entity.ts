import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item-type')
export class PhoneNumberEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: number;

    @Column({nullable: true})
    description: string;

}