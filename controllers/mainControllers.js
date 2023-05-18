const path = require('path');

const controllers = {
    getIndex: (req, res) => {
        res.render('home');
    },

    getContact: (req, res) => {
        res.render('home');
    },

    getAbout: (req, res) => {
        res.render('home');
    }
}

module.exports = controllers;