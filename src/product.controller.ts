import { Controller, Get, Render, Param, Res } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("/product")
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get("/")
    @Render("products/index")
    async index() {
        const viewData = [];
        viewData["title"] = "Our Products";
        viewData["products"] = await this.productService.findAll();
        return {
            viewData: viewData,
        };
    }

    @Get("/:id")
    @Render("products/singleProduct")
    async getOne(@Param("id") id) {
        const product = await this.productService.findOne(id);
        
        const viewData = [];
        viewData["title"] = product.name;
        viewData["subtitle"] = product.description;
        viewData["product"] = product;
        viewData["image"] = product.image;
        viewData["price"] = product.price;
        return {
            viewData: viewData,
        };
    }
}