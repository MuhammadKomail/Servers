const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Admin = require('./models/admin.model')
const UserFormData = require('./models/userForm.model')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

MONGODB_URL = "mongodb+srv://Muhammadkomail:1234567890@cluster0.1wv74.mongodb.net/Muhammadkomail?retryWrites=true&w=majority";

mongoose.connect(
  MONGODB_URL,
  () => {
    console.log("DB Connected Successfully");
  }
);

app.use(cors());
app.use(express.json());



const cardRouter = require('./routing/cards');
app.use('/cards', cardRouter);


// ====================================
app.post('/api/register', async (req, res) => {
  console.log(req.body)
  try {
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
    res.json({ status: 'ok' })
  } catch (err) {
    res.json({ err })
  }
})

app.post('/admin/register', async (req, res) => {
  console.log(req.body)
  try {
    await Admin.create({
      email: req.body.email,
      password: req.body.password,
    })
    res.json({ status: 'ok' })
  } catch (err) {
    res.json({ err })
  }
})


app.post('/admin/login', async (req, res) => {
  const user = await Admin.findOne({
    email: req.body.email,
    password: req.body.password,
  })
  if (user) {
    const token = jwt.sign(
      {
        name: User.name,
        email: User.email,
      },
      'secret123'
    )
    return res.json({ status: 'ok', user: token, id: user._id })
  } else {
    return res.json({ status: 'error', user: false })
  }
})

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  })
  if (user) {
    const token = jwt.sign(
      {
        name: User.name,
        email: User.email,
      },
      'secret123'
    )
    return res.json({ status: 'ok', user: token, id: user._id })
  } else {
    return res.json({ status: 'error', user: false })
  }
})


app.get('/', (request, response) => {
  User.find()
    .then(user => response.json(user))
    .catch(err => response.status(400).json('Error: ' + err));
})

app.get('/:id', (request, response) => {
  User.findById(request.params.id)
    .then(user => response.json(user))
    .catch(err => response.status(400).json('Error: ' + err));
});


app.post('/add/formData', async (request, response) => {
  const email = request.body.email;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const Address = request.body.Address;
  const Country = request.body.Country;
  const Province = request.body.Province;
  const Phone = request.body.Phone;
  const Zip = request.body.Zip;
  const City = request.body.City;
  const orderAmount = request.body.orderAmount;
  const idOfItemAndQuantity = Array(request.body.idOfItemAndQuantity);
  const idOfUser = request.body.idOfUser;
  const status = request.body.status;
  const newFormData = new UserFormData({
    email,
    firstName,
    lastName,
    Address,
    Country,
    Province,
    Phone,
    Zip,
    City,
    orderAmount,
    idOfItemAndQuantity,
    idOfUser,
    status
  });
  newFormData.save()
    .then(() => response.json('Form SuccessFully Submited!'))
    .catch(err => response.status(400).json('Error: ' + err));
});

app.post('/update/formData/:id', async (request, response) => {
  UserFormData.findById(request.params.id)
    .then(formData => {
      formData.status = request.body.status;
      formData.save()
        .then(() => response.json('form Data updated!'))
        .catch(err => response.status(400).json('Error: ' + err));
    })
    .catch(err => response.status(400).json('Error: ' + err));
});





app.get('/formData/get', (request, response) => {
  UserFormData.find()
    .then(formData => response.json(formData))
    .catch(err => response.status(400).json('Error: ' + err));
})

app.delete('/deleteformData/:id', (request, response) => {
  UserFormData.findByIdAndDelete(request.params.id)
    .then(formData => response.json(formData))
    .catch(err => response.status(400).json('Error: ' + err));
})
// ====================================
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});