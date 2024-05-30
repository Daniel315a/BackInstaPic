import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'character varying',
        length: 255
    })
    auth0Id: string;

    @Column({
        type: 'character varying',
        length: 100
    })
    nickName: string;

    @Column({
        type: 'character varying',
        length: 256
    })
    email: string;

    @Column({
        type: 'character varying',
        length: 100
    })
    familyName: string

    @Column({
        type: 'character varying',
        length: 100
    })
    givenName: string;

    @Column({
        type: 'date'
    })
    birthDate: Date;

    @Column({
        type: 'date',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdDate: Date;

    @Column({ default: true })
    isActive: boolean;

}

export enum RequestState {
    ACEPTED = 'Acepted',
    REJECTED = 'Rejected',
    PENDING = 'Pending'
}