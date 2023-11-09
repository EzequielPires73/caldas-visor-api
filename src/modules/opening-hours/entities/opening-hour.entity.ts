import { DayOfWeek } from "src/enums/day-week.enum";
import { Location } from "src/entities/location.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OpeningHour {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'simple-enum', enum: DayOfWeek})
    dayOfWeek: DayOfWeek;

    @Column({type: 'datetime', nullable: true})
    date: Date;

    @Column({nullable: true})
    description: string;

    @Column('time')
    startTime: string;

    @Column('time')
    endTime: string;

    @ManyToOne(() => Location, (location) => location.openingHours, {nullable: false})
    location: Location;
}
