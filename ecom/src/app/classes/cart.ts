import { Product } from "./product";

export class Cart {
    cartId: number;
    userId: number;
    productId: Product;
    quantity: number;
    subprice: number;
}
