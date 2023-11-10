import { Location } from "src/entities/location.entity";
import { OpeningHour } from "src/modules/opening-hours/entities/opening-hour.entity";
import { Ticket } from "src/modules/tickets/entities/ticket.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TouristAttraction extends Location {
    @OneToMany(() => Ticket, ticket => ticket.touristAttraction)
    tickets: Ticket[];

    @OneToMany(() => OpeningHour, (openingHours) => openingHours.touristAttraction)
    openingHours: OpeningHour[];
}
