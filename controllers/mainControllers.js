const path = require('path');

const controllers = {
    getIndex: (req, res) => {
        let userData = req.session.user;

        if(!userData){
            userData = {}
        }

        res.render('home', {title: 'Home', userData});
    },

    getContact: (req, res) => {
        res.render('home', {title: 'Home'});
    },

    getAbout: (req, res) => {
        res.render('home', {title: 'Home'});
    }
}

module.exports = controllers;