import { TypeTicket } from "src/enums/type-ticket.enum";
import { Location } from "src/entities/location.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'simple-enum', enum: TypeTicket})
    type: TypeTicket;

    @Column('decimal')
    value: string;
    
    @Column({nullable: true})
    link: string;

    @ManyToOne(() => Location, location => location.tickets)
    location: Location;
}
