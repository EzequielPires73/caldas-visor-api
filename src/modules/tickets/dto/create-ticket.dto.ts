import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { TypeTicket } from "src/enums/type-ticket.enum";

export class CreateTicketDto {
    @ApiProperty({
        description: 'Insira o tipo do ingresso',
        default: TypeTicket.inteira
    })
    type: TypeTicket;

    @ApiProperty({
        description: 'Insira o valor do ingresso',
        default: '45,00'
    })
    value: string;
    
    @ApiPropertyOptional({
        description: 'Insira o link de compra do ingresso',
        default: 'https://url-compra-ingresso.com.br'
    })
    link: string;

    @ApiProperty({
        description: 'Inserir o id do evento ou ponto de turismo'
    })
    locationId: number;
}
