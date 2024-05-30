import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity'; 
@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.id)
    user: number;

    @Column({
        type: 'character varying',
        length: 500
    })
    urlResource: string;

    @Column({
        type: 'character varying',
        length: 250
    })
    title: string;

    @Column({
        type: 'date',
        default: () => 'CURRENT_TIMESTAMP'
    })
    date: Date;
    
}
