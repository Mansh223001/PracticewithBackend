require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Middleware (top pe)
app.use(express.json());

app.use((req, res, next) => {
  console.log("Request aaya");
  next();
});

// Routes
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

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})