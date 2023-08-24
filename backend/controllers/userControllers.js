const userModel = require('../models/User.js');
const bcrypt = require('bcrypt');

const controllers = {
    signOut: (req, res) => {
        res.clearCookie('email');

        delete req.session.user;

        res.redirect('/users/login');
    },

    getRegister: (req, res) => {
        res.render('register');
    },

    registerUser: (req, res) => {
        const user = {
            ...req.body
        };

        const newPassword = bcrypt.hashSync(user.password, 12);

        user.password = newPassword;

        userModel.createOne(user);

        res.send('Se registró el usuario');
    },

    getLogin: (req, res) => {
        const error = req.query.error || '';

        res.render('login', {error});
    },
    
    loginUser: (req, res) => {
        const searchedUser = userModel.findByEmail(req.body.email);

        
        if(!searchedUser){
            return res.redirect('/users/login?error=El mail o la contraseña son incorrectos');
        }
        
        const {password: hashedPw} = searchedUser;
        const isCorrect = bcrypt.compareSync(req.body.password, hashedPw);
        
        if(isCorrect){
            if(!!req.body.remember){
                res.cookie('email', searchedUser.email, {
                    maxAge: 1000 * 60 * 60 * 24 * 360 * 9999
                });
            }

            delete searchedUser.password;
            delete searchedUser.id;

            req.session.user = searchedUser;

            res.redirect('/');
        } else {
            return res.redirect('/users/login?error=El mail o la contraseña son incorrectos');
        }
    },

    getList: (req, res) => {
        res.render('userList')
    }
}

module.exports = controllers;