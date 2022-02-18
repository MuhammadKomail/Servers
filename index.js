const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


mongoose.connect(
  "mongodb+srv://Muhammadkomail:1234567890@cluster0.1wv74.mongodb.net/Muhammadkomail?retryWrites=true&w=majority",
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
    res.json({ status: 'error', error: 'Duplicate email', err })

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
    return res.json({ status: 'ok', user: token })
  } else {
    return res.json({ status: 'error', user: false })
  }
})


app.get('/api/quote', async (req, res) => {
  const token = req.headers['x-access-token ']
  try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email
    await User.find0ne({ email: email })
    return res.json({ status: 'ok', quote: user.quote })
  } catch (error) {
    console.log(error)
    res.json({ status: 'error', error: 'invalid token' })
  }
})

app.post('/api/quote', async (req, res) => {
  const token = req.headers['x-access-token']
  try {
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email
    await User.updateOne(
      { email: email },
      { $set: { quote: req.body.quote } }
    )
    return res.json({ status: 'ok' })
  } catch (error) {
    console.log(error)
    res.json({ status: 'error', errot: 'invalid token' })
  }
})
// ====================================

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});