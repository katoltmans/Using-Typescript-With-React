import { IOrder } from "./calculateTotalAmount";

export class ShoppingCart implements IOrder {
    calculateTotal(): number {
        return 100;
    }
}
