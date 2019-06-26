'use strict';

const botBuilder = require('claudia-bot-builder');

const api = botBuilder(() => {
    return `Hello from Aunt Maria's Pizzeria!`
});

module.exports = api;
