import { Product } from "../../models/product"
const faker = require('faker');
export class ProductControllers {

    static async getProducts(req: any, res: any, next: any) {
        const products: Product[] = [];
        for (let i = 0; i < 100; i++) {
            const name = faker.name.firstName() + ' ' + faker.name.lastName();
            const image = `https://robohash.org/${name}.png?size=120x120`;
            const price = faker.finance.amount();
            const stock = faker.random.number({ max: 10, min: 0 });
            const createdAt = faker.date.past();
            const material = faker.commerce.productMaterial();

            products.push({
                id: i,
                name,
                image,
                price,
                stock,
                createdAt,
                material
            });
        }

        return res.json({
            data: [...products],
            status: 'success'
        })
    }

    static async getProduct(req: any, res: any, next: any) {
        return res.json({
            data: [],
            status: 'success'
        })
    }
}