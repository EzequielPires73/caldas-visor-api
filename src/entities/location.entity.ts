import { OpeningHour } from "src/modules/opening-hours/entities/opening-hour.entity";
import { Ticket } from "src/modules/tickets/entities/ticket.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, TableInheritance } from "typeorm";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 50 })
    name: string;

    @OneToMany(() => OpeningHour, (openingHours) => openingHours.location)
    openingHours: OpeningHour[];

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

    @OneToMany(() => Ticket, ticket => ticket.location)
    tickets: Ticket[];
}
