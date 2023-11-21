import { hashSync } from "bcrypt";
import { TypeUser } from "src/enums/type-user.enum";
import { Token } from "src/modules/tokens/entities/token.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['email'])
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({type: 'simple-enum', enum: TypeUser, default: TypeUser.customer})
    type: TypeUser;

    @Column({nullable: true})
    companyName: string;

    @Column({nullable: true})
    companyDocument: string;

    @Column({nullable: true})
    cep: string;

    @Column({nullable: true})
    state: string;

    @Column({nullable: true})
    city: string;

    @Column({nullable: true})
    address: string;

    @OneToMany(() => Token, token => token.user)
    tokens: Token[]

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }
}
