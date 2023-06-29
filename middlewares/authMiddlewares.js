const middlewares = {
    allowUnsignedIn: (req, res, next) => {
        if(!req.session.user){
            next();
        } else {
            res.redirect('/');
        }
    },

    allowSignedIn: (req, res, next) => {
        if(req.session.user){
            next();
        } else {
            res.redirect('/users/login');
        }
    },

    allowAdmin: (req, res, next) => {
        if(req.session.user.type === 'admin'){
            next();
        } else {
            res.redirect('/');
        }
    }  
}

module.exports = middlewares;