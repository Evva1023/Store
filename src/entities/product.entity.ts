import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        length: 100,
        default: "No description",
    })
    description: string;
    
    @Column()
    image: string;

    @Column({
        type: "float",
        precision: 6,
        scale: 2,
    })
    price: number;
}