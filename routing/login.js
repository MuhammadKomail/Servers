const router = require('express').Router();
// let User = require('../models/registers');

router.route('/').get((request, response) => {
    Login.find()
        .then(Cards => response.json(Cards))
        .catch(err => response.status(400).json('Error: ' + err));
});

router.route('/api/login').post( async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })
    if (user) {
        I
        return res.json({ status: 'ok', user: true })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

module.exports = router;