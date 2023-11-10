import { Location } from "src/entities/location.entity";
import { OpeningHour } from "src/modules/opening-hours/entities/opening-hour.entity";
import { Ticket } from "src/modules/tickets/entities/ticket.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Event extends Location {
    @Column()
    sponsors: string;

    @OneToMany(() => Ticket, ticket => ticket.event)
    tickets: Ticket[];

    @OneToMany(() => OpeningHour, openingHours => openingHours.event)
    openingHours: OpeningHour[];
}
