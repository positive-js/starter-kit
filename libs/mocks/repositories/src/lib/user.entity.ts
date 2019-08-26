import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    authMethod: string;

    @CreateDateColumn()
    created: string;

    @Column()
    deactivated: boolean;

    @Column()
    email: string;

    @Column()
    firstName: string;

    @Column()
    language: string;

    @Column()
    lastName: string;

    @Column()
    login: string;

    @Column()
    passwordExpired: boolean;

    @Column()
    tzName: string;

    @Column()
    userRole: string;
}
