const mongoose = require('mongoose')

const Admin = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true }
	},
	{ collection: 'admin-data' }
)

const Adminmodel = mongoose.model('AdminData', Admin)

module.exports =Adminmodel