const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

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
    res.json({  err })
    // status: 'error', error: 'Duplicate email',
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




// ====================================

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});