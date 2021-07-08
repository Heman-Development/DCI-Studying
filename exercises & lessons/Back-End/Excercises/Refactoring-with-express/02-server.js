// Example 2: serving JSON

const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

app.get("/json", (req, res) => {
  res.end(JSON.stringify({ text: 'Hi', numbers: [1, 2, 3] }))
});

app.listen(port, () => {
  console.log(`Example app listen att http://localhost:${port}`)
})