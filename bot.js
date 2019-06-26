'use strict';

const pizzas = require('./data/pizzas.json');

const botBuilder = require('claudia-bot-builder');

const api = botBuilder(() => {
    return [
        `Hello, here's our pizza menu: ` + pizzas.map(pizza => pizza.name).join(', '),
        'Which one do you want?'
    ];
}, {
    platforms: ['facebook']
});

module.exports = api;
