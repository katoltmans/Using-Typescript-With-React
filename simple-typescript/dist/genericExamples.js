"use strict";
// Generic Functions
function genericFunction(x) {
    // let y: T;
    return x;
}
const genericArrowFunction = (x) => x;
// Generic Classes
class GenericClass {
    constructor(props) {
        this.props = props;
    } //constructor
    getProps() {
        // instance
        return this.props;
    }
}
const chocoCakes = [{ expiryDate: new Date() }];
const vanillaCakes = [{ expiryDate: new Date() }];
const getExpiredItems = (items) => {
    const currentDate = new Date().getTime();
    return items.filter((item) => item.expiryDate.getDate() < currentDate);
};
const expiredChocoCakes = getExpiredItems(chocoCakes);
const expiredVanillaCakes = getExpiredItems(vanillaCakes);
const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    },
};
