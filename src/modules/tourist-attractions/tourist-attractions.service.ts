import { Injectable } from '@nestjs/common';
import { CreateTouristAttractionDto } from './dto/create-tourist-attraction.dto';
import { UpdateTouristAttractionDto } from './dto/update-tourist-attraction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TouristAttraction } from './entities/tourist-attraction.entity';
import { Repository } from 'typeorm';
import { TicketsService } from '../tickets/tickets.service';
import { OpeningHoursService } from '../opening-hours/opening-hours.service';
import { FindTouristAttractionDto } from './dto/find-tourist-attraction.dto';

@Injectable()
export class TouristAttractionsService {
  constructor(
    @InjectRepository(TouristAttraction) private repository: Repository<TouristAttraction>,
    private ticketsService: TicketsService,
    private openingHoursService: OpeningHoursService
  ) {}
  
  async create(createTouristAttractionDto: CreateTouristAttractionDto) {
    try {
      const {openingHours, tickets, ...data} = createTouristAttractionDto;
      const touristAttraction = await this.repository.save(data);

      if(touristAttraction && openingHours) {
        for(let i = 0; i < openingHours.length; i++) {
          await this.openingHoursService.create({
            ...openingHours[i],
            touristAttractionId: touristAttraction.id
          })
        }
      }
      
      if(touristAttraction && tickets) {
        for(let i = 0; i < tickets.length; i++) {
          await this.ticketsService.create({
            ...tickets[i],
            touristAttractionId: touristAttraction.id
          })
        }
      }

      return {
        success: true,
        result: await this.repository.findOne({
          where: {id: touristAttraction.id},
          relations: ['openingHours', 'tickets']
        })
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findAll(query: FindTouristAttractionDto) {
    try {
      const {limit, page} = query;

      const [results, total] = await this.repository.findAndCount({
        relations: ['openingHours', 'tickets'],
        take: (limit ?? 8),
        skip: ((page ?? 1) - 1) * (limit ?? 8)
      })
      return {
        success: true,
        results,
        total,
        page: +page ?? 1,
        limit: +limit ?? 8
      }      
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} touristAttraction`;
  }

  update(id: number, updateTouristAttractionDto: UpdateTouristAttractionDto) {
    return `This action updates a #${id} touristAttraction`;
  }

  remove(id: number) {
    return `This action removes a #${id} touristAttraction`;
  }
}
