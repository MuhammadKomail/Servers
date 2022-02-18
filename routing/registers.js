const router = require('express').Router();
let Register = require('../models/registers');

router.route('/').get((request, response) => {
    Register.find()
        .then(Cards => response.json(Cards))
        .catch(err => response.status(400).json('Error: ' + err));
});


router.route('/api/regist').post( async (request, response) => {
    console.log(request.body)
    try {
        await User.create({
            firstName: request.body.name,
            lastName: request.body.name,
            email: request.body.email,
            password: request.body.password,
        })
        response.json( {status : 'ok' })
     } catch (err) {
        console. log(err)
        response.json({ status: 'error', error: 'Duplicate email' })
    }                    I
})


module.exports = router;