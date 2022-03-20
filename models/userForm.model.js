const mongoose = require('mongoose')

const UserForm = new mongoose.Schema(
	{
		email: { type: String, required: true },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true},
		Address: { type: String, required: true },
		Country: { type: String, required: true },
		// Province: { type: String, required: true },
		Phone: { type: Number, required: true},
		Zip: { type: String, required: true },
		City: { type: String, required: true },
		orderAmount: { type: Number, required: true },
		idOfItemAndQuantity: { type: Array, required: true},
		idOfUser: { type: String, required: true },
		status: { type: String, required: true },
	},
	{ collection: 'user-Form-data' }
)


const model = mongoose.model('UserFormData', UserForm)

module.exports = model