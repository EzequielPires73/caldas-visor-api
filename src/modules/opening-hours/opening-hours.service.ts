import { Injectable } from '@nestjs/common';
import { CreateOpeningHourDto } from './dto/create-opening-hour.dto';
import { UpdateOpeningHourDto } from './dto/update-opening-hour.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OpeningHour } from './entities/opening-hour.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OpeningHoursService {
  constructor(
    @InjectRepository(OpeningHour) private repository: Repository<OpeningHour>
  ) {}
  
  async create(createOpeningHourDto: CreateOpeningHourDto) {
    try {
      const {eventId, touristAttractionId} = createOpeningHourDto;

      const openingHour = this.repository.create({
        ...createOpeningHourDto,
        touristAttraction: touristAttractionId ? {
          id: createOpeningHourDto?.touristAttractionId
        } : null,
        event: eventId ? {
          id: createOpeningHourDto?.eventId
        } : null
      });
      
      return {
        success: true,
        result: await this.repository.save(openingHour)
      }
    } catch (error) {
      console.log(error.message);
      return {
        success: false,
        message: error.message 
      }
    }
  }

  findAll() {
    return `This action returns all openingHours`;
  }

  findOne(id: number) {
    return `This action returns a #${id} openingHour`;
  }

  update(id: number, updateOpeningHourDto: UpdateOpeningHourDto) {
    return `This action updates a #${id} openingHour`;
  }

  remove(id: number) {
    return `This action removes a #${id} openingHour`;
  }
}
