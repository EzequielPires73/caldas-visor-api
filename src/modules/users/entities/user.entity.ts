import { hashSync } from "bcrypt";
import { TypeUser } from "src/enums/type-user.enum";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

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

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }
}
