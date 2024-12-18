"use strict";
const menu = [
    { name: 'Margharita', price: 8 },
    { name: 'Pepperoni', price: 10 },
    { name: 'Havaiana', price: 10 },
    { name: 'Portuguesa', price: 9 },
];
let dinheiroNoCaixa = 100;
let nextOrderId = 1;
const orderQueue = [];
function AdicionaPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    const pizza = menu.find((pizza) => pizza.name === pizzaName);
    if (pizza) {
        dinheiroNoCaixa += pizza.price;
        const orderObj = {
            pizza: pizza.name,
            status: 'ordered',
            id: nextOrderId++,
        };
        orderQueue.push(orderObj);
        return orderObj;
    }
    else {
        console.log(`${pizzaName} não existente.`);
        return;
    }
}
function completeOrder(orderID) {
    const order = orderQueue.find((order) => order.id === orderID);
    if (order) {
        order.status = 'completed';
        return order;
    }
    else {
        console.log(`${orderID} não existente.`);
        return;
    }
}
AdicionaPizza({ name: 'Pizza de Sushi', price: 10 });
AdicionaPizza({ name: 'Presunto', price: 7 });
AdicionaPizza({ name: 'Frango com Catupiry', price: 9 });
AdicionaPizza({ name: 'Brigadeiro', price: 11 });
placeOrder('Havaiana');
placeOrder('Brigadeiro');
placeOrder('Pizza de Sushi');
completeOrder(1);
console.log('Menu:', menu);
console.log('Fila de Pedidos:', orderQueue);
console.log(`R$${dinheiroNoCaixa}`);
function Somar(x, y) {
    console.log(`${x + y}`);
}
Somar(1, 2);
//# sourceMappingURL=aprenderts.js.map