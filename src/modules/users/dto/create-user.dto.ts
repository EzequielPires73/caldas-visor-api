import { ApiProperty } from '@nestjs/swagger';
import { TypeUser } from 'src/enums/type-user.enum';

export class CreateUserDto {
    @ApiProperty({
        description: 'Inserir o nome do usuário',
        default: 'André Tonim'
    })
    name: string;

    @ApiProperty({
        description: 'Inserir o email do usuário',
        default: 'andre@gmail.com'
    })
    email: string;

    @ApiProperty({
        description: 'Inserir a senha do usuário',
        default: '12345678'
    })
    password: string;
    
    @ApiProperty({
        description: 'Inserir a senha do usuário',
        default: TypeUser.customer,
        enum: TypeUser
    })
    type: TypeUser;
}
