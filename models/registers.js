const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const registersSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    {
        collection: 'user-data',
    }
);


const registers = moongoose.model('registers', registersSchema);

module.exports = registers;