const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Node Server 🚀");
  console.log("Hello Mansh! Welcome to Node.js");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});



