import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CreateOpeningHourDto } from "src/modules/opening-hours/dto/create-opening-hour.dto";

export class CreateLocationDto {
    @ApiPropertyOptional()
    id?: string;

    @ApiProperty()
    name: string;

    @ApiPropertyOptional()
    openingHours?: Array<CreateOpeningHourDto>;

    @ApiProperty({
        description: 'Insira o endereço',
        default: 'Rua José da Rosa Pena'
    })
    address: string;

    @ApiProperty({
        description: 'Insira o CEP',
        default: 75705000
    })
    zipCode: number;

    @ApiProperty({
        description: 'Insira a cidade',
        default: 'Catalão'
    })
    city: string;

    @ApiProperty({
        description: 'Insira o Estado',
        default: 'Goiás'
    })
    state: string;

    @ApiProperty({
        description: 'Insira a descrição do evento ou ponto turistico',
        default: 'Exemplo da descrição do evento ou ponto turistico'
    })
    description: string;

    @ApiPropertyOptional({
        description: 'Insira a taxa de admissão',
        default: true
    })
    admissionFee: boolean;

    @ApiPropertyOptional({
        description: 'Insira as urls das imagens',
        default: ['https://url-da-imagem.png']
    })
    images: Array<string>;
}