
const express = require('express')
const app = express()
const port = process.env.Port || 3000

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})

app.get("/welcome", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.get("/api", (req, res) => {
  res.json({
    name: "Manshvi",
    role: "Developer"
  });
});

app.get("/user/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.use((req, res, next) => {
  console.log("Request aaya");
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
