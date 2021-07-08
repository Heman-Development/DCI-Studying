// Example 3: basic routing
const express = require('express');
const port = process.env.PORT || 5000;
const app = express();




function respondText(req, res) {
  res.end('Hi')
}

function respondJson(req, res) {
  res.end(JSON.stringify({ text: 'Hi', numbers: [1, 2, 3] }))
}

function respondNotFound(req, res) {
  res.status(404)
}

// depending on the URL the user enters, the server responds with text,
// json, or with a 404 "Not found" message

// const str = '/'
// app.get(str, (req, res) => {
//   if (str === '/') return respondText(req, res);
//   if (str === '/json') return respondJson(req, res);
//   respondNotFound(req, res);
// });


app.get('/', (req, res) => {
  return respondText(req, res);
});

app.get('/json', (req, res) => {
  return respondJson(req, res);
});

app.get('/', (req, res) => {
  return respondNotFound(req, res);
});


app.listen(port, () => {
  console.log(`Example app listen att http://localhost:${port}`)
})


