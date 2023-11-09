import { Module } from '@nestjs/common';
import { TouristAttractionsService } from './tourist-attractions.service';
import { TouristAttractionsController } from './tourist-attractions.controller';

@Module({
  controllers: [TouristAttractionsController],
  providers: [TouristAttractionsService],
})
export class TouristAttractionsModule {}
