import { IOrder } from "./calculateTotalAmount";

export class Order implements IOrder {
    calculateTotal(): number {
        return 100;
    }
}
