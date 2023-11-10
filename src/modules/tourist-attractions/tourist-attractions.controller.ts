import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TouristAttractionsService } from './tourist-attractions.service';
import { CreateTouristAttractionDto } from './dto/create-tourist-attraction.dto';
import { UpdateTouristAttractionDto } from './dto/update-tourist-attraction.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindTouristAttractionDto } from './dto/find-tourist-attraction.dto';

@ApiTags('tourist-attractions')
@Controller('tourist-attractions')
export class TouristAttractionsController {
  constructor(private readonly touristAttractionsService: TouristAttractionsService) {}

  @Post()
  create(@Body() createTouristAttractionDto: CreateTouristAttractionDto) {
    return this.touristAttractionsService.create(createTouristAttractionDto);
  }

  @Get()
  findAll(@Query() query: FindTouristAttractionDto) {
    return this.touristAttractionsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.touristAttractionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTouristAttractionDto: UpdateTouristAttractionDto) {
    return this.touristAttractionsService.update(+id, updateTouristAttractionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.touristAttractionsService.remove(+id);
  }
}
