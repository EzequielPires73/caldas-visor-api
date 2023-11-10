import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Location {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 50 })
    name: string;

    @Column('varchar', { length: 50 })
    address: string;

    @Column()
    zipCode: number;

    @Column('varchar', { length: 50 })
    city: string;

    @Column('varchar', { length: 50 })
    state: string;

    @Column('varchar', { length: 400 })
    description: string;

    @Column()
    admissionFee: boolean;

    @Column({type: 'simple-array'})
    images: Array<string>;
}
