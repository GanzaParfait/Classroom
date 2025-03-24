import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User{

    @PrimaryGeneratedColumn()
    user_id: number

    @Column({nullable: false, unique: true})
    username: string
    
    @Column()
    password: string
}