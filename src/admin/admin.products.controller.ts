import { Controller, Get, Render, Post, Body, Redirect, Param } from "@nestjs/common";
import { ProductService } from "src/product.service";
import { Product } from "src/entities/product.entity";

@Controller("/admin/products")
export class AdminProductsController {
    constructor(private readonly productService: ProductService) {}

    @Get("/")
    @Render("admin/products/index")
    async index() {
        const viewData = [];
        viewData["title"] = "Admin Page";
        viewData["products"] = await this.productService.findAll();
        return {
            viewData: viewData,
        };
    }

    @Post("/store")
    @Redirect("/admin/products")
    async store(@Body() body) {
        const newProduct = new Product();
        newProduct.name = body.name;
        newProduct.price = body.price;
        newProduct.description = body.description;
        newProduct.image = body.image;
        await this.productService.create(newProduct);
    }

    @Post("/:id")
    @Redirect("/admin/products")
    remove(@Param("id") id: string) {
        return this.productService.remove(id);
    }

    @Get("/:id")
    @Render("admin/products/edit")
    async edit(@Param("id") id: string) {
        const viewData = [];
        viewData["title"] = "Edit Product";
        viewData["product"] = await this.productService.findOne(id);
        return {
            viewData: viewData,
        }
    }

    @Post("/:id/update")
    @Redirect("/admin/products")
    async update(@Body() body, @Param("id") id: string) {
        const product = await this.productService.findOne(id);
        product.name = body.name;
        product.description = body.description;
        product.price = body.price;
        await this.productService.create(product);
    }
}