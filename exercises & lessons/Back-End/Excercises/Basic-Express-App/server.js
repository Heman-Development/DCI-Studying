const express = require('express');
const app = express();
global.config = require('./config')
app.use(express.static(__dirname + '/public'));

//·the home page (‘/’) with the words “Welcome to the page I call home”,
app.get('/home', (rqe, res) => {
  res.end('Welcome to the page. I call home');
})

//·the About page (‘/about’) with some JSON object :

const users = require('./users')

app.get('/about', (req, res) => {
  res.status(200).json({
    data: users,
    sucess: true
  })
})


//· the Contact page (‘/contact’) with the name of the parent directory of your app.js file

app.get('/contact', (req, res) => {
  res.end(__dirname)
})




// Form 

// app.use(express.urlencoded({ extended: true }))
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html')
// })
// app.post('/', (req, res) => {
//   res.json(req.body)
// })


// Bonus 

app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})



app.post('/', (req, res) => {
  const username = req.body.username;
  const pwd = req.body.password
  const matchesUser = (user) => {
    return user.username === username && user.password === pwd;
  };
  const matchingUser = users.find(matchesUser);
  if (matchingUser) {
    res.send(`Welcome, ${username}!`);
  } else {
    res.send('Login failed');
  }

});



app.listen(config.port, () => {
  console.log(`Example app listen at http://localhost:${config.port}`)
})


