import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
     ) {}

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    async findOne(id): Promise<Product> {
        return await this.productRepository.findOneOrFail({
            where: {
                id: id,
            }
        });
    }

    create(product: Product): Promise<Product> {
        console.log(product);
        return this.productRepository.save(product);
    }

    async remove(id: string): Promise<void> {
        await this.productRepository.delete(id);
    }
}