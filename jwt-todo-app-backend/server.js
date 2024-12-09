// server js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken'); // JWT 

const app = express();

// CORS 
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // localhost:3000

app.use(bodyParser.json());  

const users = [];


app.post('/register', (req, res) => {
  const { email, password } = req.body;


  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).send('Already registered.');
  }


  const newUser = { email, password };  
  users.push(newUser);

  res.status(200).send('Scuessful ');
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email);
  if (!user || user.password !== password) {
    return res.status(400).send('wrong email and password');
  }

  // JWT
  const token = jwt.sign({ email: user.email }, 'your-secret-key', { expiresIn: '1h' });

  res.status(200).send({ token });
});


app.listen(5000, () => {
  console.log('local host 5000 is working');
});
