import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { TicketsService } from '../tickets/tickets.service';
import { OpeningHoursService } from '../opening-hours/opening-hours.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private repository: Repository<Event>,
    private ticketsService: TicketsService,
    private openingHoursService: OpeningHoursService
  ) {}

  async create(createEventDto: CreateEventDto, user: User) {
    try {
      const {openingHours, tickets, ...data} = createEventDto;
      const event = await this.repository.save({...data, organizer: user});

      if(event && openingHours) {
        for(let i = 0; i < openingHours.length; i++) {
          await this.openingHoursService.create({
            ...openingHours[i],
            eventId: event.id
          })
        }
      }
      
      if(event && tickets) {
        for(let i = 0; i < tickets.length; i++) {
          await this.ticketsService.create({
            ...tickets[i],
            eventId: event.id
          })
        }
      }

      return {
        success: true,
        result: await this.repository.findOne({
          where: {id: event.id},
          relations: ['openingHours', 'tickets', 'organizer']
        })
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findAll() {
    try {
      return await this.repository.find({
        relations: ['openingHours', 'tickets', 'organizer'],
        select: {
          organizer: {
            name: true,
            email: true,
          }
        }
      });
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findOne(id: string) {
    try {
      return await this.repository.findOne({where: {id}, relations: ['openingHours', 'tickets', 'organizer']});
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
