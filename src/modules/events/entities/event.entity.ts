import { Location } from "src/entities/location.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Event extends Location {
    @Column()
    sponsors: string;
}
