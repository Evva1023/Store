import { Controller, Get, Render, Param } from "@nestjs/common";

@Controller("/product")
export class ProductController {
    products = [
        {
            id: "1",
            name: "Strawberries",
            description: "Very sweet and organically grown",
            image: "one.jpg",
            price: "10.00"
        },
        {
            id: "2",
            name: "Blueberries",
            description: "Very sweet and organically grown",
            image: "two.jpg",
            price: "19.00"
        },
        {
            id: "3",
            name: "Raspberries",
            description: "Very sweet and organically grown",
            image: "three.jpg",
            price: "15.00"
        },
        {
            id: "4",
            name: "Pineapples",
            description: "Very sweet and organically grown",
            image: "four.jpg",
            price: "10.00"
        },
    ]; 

    @Get("/")
    @Render("products/index")
    index() {
        const viewData = [];
        viewData["title"] = "Our Products";
        viewData["products"] = this.products;
        return {
            viewData: viewData,
        };
    }

    @Get("/:id")
    @Render("products/singleProduct")
    show(@Param() params) {
        const product = this.products[params.id - 1];
        const viewData = [];
        viewData["title"] = product.name;
        viewData["subtitle"] = product.description;
        viewData["product"] = product;
        return {
            viewData: viewData,
        };
    }
}