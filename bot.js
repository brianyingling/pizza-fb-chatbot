'use strict';

const pizzas = require('./data/pizzas.json');
const pizzaDetails = require('./handlers/pizza-details');
const orderPizza = require('./handlers/order-pizza');
const pizzaMenu = require('./handlers/pizza-menu');

const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

const api = botBuilder(message => {
    if (message.postback) {
        const [action, pizzaId] = message.text.split('|');
        if (action === 'DETAILS') {
            return pizzaDetails(pizzaId);
        } else if (action === 'ORDER') {
            return orderPizza(pizzaId);
        }
    }

    return [
        `Hello, here's our pizza menu: `,
        pizzaMenu()
    ];
}, {
    platforms: ['facebook']
});

module.exports = api;
