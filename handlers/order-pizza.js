'use strict';

const pizzas = require('../data/pizzas.json');

function orderPizza(id) {
    const pizza = pizzas.find(pizza => pizza.id == id);
    return `Thanks for ordering ${pizza.name}. I will let you know as soon as your pizza is ready`;
}

module.exports = orderPizza;
