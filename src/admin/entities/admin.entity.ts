import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('admin')
export class AdminEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

}
