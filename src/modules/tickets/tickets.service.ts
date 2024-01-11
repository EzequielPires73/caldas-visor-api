import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket) private repository: Repository<Ticket>
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    try {
      const {eventId, touristAttractionId} = createTicketDto;

      const ticket = await this.repository.save({
        ...createTicketDto,
        value: createTicketDto.value.replace(/[^0-9]/g, ''),
        touristAttraction: touristAttractionId ? {
          id: createTicketDto?.touristAttractionId
        } : null,
        event: eventId ? {
          id: createTicketDto?.eventId
        } : null
      });
      
      return {
        success: true,
        ticket
      };
    } catch (error) {
      console.log(error.message);
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findAll() {
    try {
      return await this.repository.find();
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
