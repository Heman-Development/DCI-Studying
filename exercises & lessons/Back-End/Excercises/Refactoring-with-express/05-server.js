// Example 5: serving static files
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

// new
const fs = require('fs')
function respondStatic(req, res) {
  const filename = `${__dirname}/public${req.url.split('/static')[1]}`;

  fs.createReadStream(filename)
    .on('error', () => respondNotFound(req, res))
    .pipe(res)
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



app.get("/static/*", respondStatic);

// app.use(express.static('public'))
// app.get("/static/*", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// })


app.listen(port, () => {
  console.log(`Example app listen att http://localhost:${port}`)
})








