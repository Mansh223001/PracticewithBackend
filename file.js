const express = require("express");
const app = express();
const name = "Mayank";

// Global middleware(Top)
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  console.log("Checked!");
  next();
});

// Middleware to log request details
const isLoggedIn = (req, res, next) => {
    const login=  req.query.login === "true";

    if (!login) {
        return res.send("Login required");
    }

    next();
};

// check the age middleware
const checkAge = (req, res, next) => {
    const age = Number(req.query.age);
    
    if (!req.query.age ||isNaN(age)) {
        return res.send("Please provide a valid age");
    }

    if (age < 0) {
        return res.send("Age cannot be negative");
    }

    next();
};

// Admin (/admin) middleware
const isAdmin = (req, res, next) => {
  if (req.query.admin !== "true") {
    return res.status(403).send("Admin access required");
  }
  next();
};

// Route handler for the root path
app.get("/", (req, res) => {
  console.log(`Hello ${name}! Welcome to Node.js`);
  res.send("Hello from Node Server 🚀");
});

app.get("/user", isLoggedIn, checkAge, (req, res) => {
const userName = req.query.name|| "Mansh";
res.send(`Hello ${userName}`);
});

app.get("/admin", (req, res) => {
    res.send("Welcome Admin 🚀");
});


app.listen(4000, () => {
  console.log("Server running on port 4000");
});



