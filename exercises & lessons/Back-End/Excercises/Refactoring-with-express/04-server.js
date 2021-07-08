// Example 4: dynamic responses
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

function respondEcho(req, res) {


  let url = `http://${port}${req.url}`;
  let params = (new URL(url)).searchParams;
  let input = params.get('input');

  res.end(
    JSON.stringify({
      normal: input,
      shouty: input.toUpperCase(),
      characterCount: input.length,
      backwards: input
        .split('')
        .reverse()
        .join('')
    })
  )
}




app.get('/', (req, res) => {
  return respondText(req, res);
});

app.get('/json', (req, res) => {
  return respondJson(req, res);
});

app.get('/', (req, res) => {
  return respondNotFound(req, res);
});

app.get('/echo', (req, res) => {
  return respondEcho(req, res);
});



app.listen(port, () => {
  console.log(`Example app listen att http://localhost:${port}`)
})
