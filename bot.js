'use strict';

const pizzas = require('./data/pizzas.json');

const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;

const api = botBuilder(message => {
    const messageTemplate = new fbTemplate.Generic();

    pizzas.forEach(pizza => {
        messageTemplate.addBubble(pizza.name)
            .addImage(pizza.image)
            .addButton('Details', pizza.id);
    });
    return [
        `Hello, here's our pizza menu: `,
        messageTemplate.get()
    ];
}, {
    platforms: ['facebook']
});

module.exports = api;
