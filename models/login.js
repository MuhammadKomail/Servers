const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const LoginSchema = new Schema(
    {
        email: { type: String, required: true},
        password: { type: String, required: true },
    },
    {
        collection: 'user-data',
    }
);


const login = moongoose.model('login', LoginSchema);

module.exports = login;