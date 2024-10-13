import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: 'referral' })
export class ReferralEntity {
    @PrimaryColumn()
    id: number

    @Column()
    givenName: string

    @Column()
    surname: string

    @Column({ unique: true })
    email: string

    @Column()
    phone: string;
    
    @Column()
    home: string;

    @Column()
    street: string;
    
    @Column()
    suburb: string;

    @Column()
    state: string;

    @Column()
    postcode: string;

    @Column()
    country: string;
}