const expressValidator = require('express-validator');

const validations = {
    validateCreateProduct: [
        expressValidator.body('title')
            .notEmpty()
            .withMessage('El nombre no debe estar vacío')
            .custom((value) => {
                if(!value.includes('!')){
                    throw new Error('La contraseña debe contener un signo de exclama');
                } 
                return true;
            }),
        expressValidator.body('price')
            .isInt().withMessage('El precio debe ser un número')
            .notEmpty().withMessage('El precio no debe estar vacío')
    ]
};

module.exports = validations;