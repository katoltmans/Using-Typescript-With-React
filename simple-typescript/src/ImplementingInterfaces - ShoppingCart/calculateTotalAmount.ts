export interface IOrder {
    calculateTotal(): number;
    // If new property products: is added, calculateOrder and order will no longer work since they do not contain that parameter
}

export function calculateTotalAmount(order: IOrder) {
    let total = order.calculateTotal();
    const discount = total * 0.1;
    total -= discount;
    const tax = total * 0.2;
    total += tax;
    return total;
}
