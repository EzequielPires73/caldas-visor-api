import { Injectable } from '@nestjs/common';
import { CreateTouristAttractionDto } from './dto/create-tourist-attraction.dto';
import { UpdateTouristAttractionDto } from './dto/update-tourist-attraction.dto';

@Injectable()
export class TouristAttractionsService {
  create(createTouristAttractionDto: CreateTouristAttractionDto) {
    return 'This action adds a new touristAttraction';
  }

  findAll() {
    return `This action returns all touristAttractions`;
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
