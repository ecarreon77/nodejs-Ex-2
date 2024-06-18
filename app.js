const http = require("http");
const express = require("express");
const app = express();

// // Middleware 1
// app.use("/", (req, res, next) => {
//   console.log("Logging from Middleware 1");
//   next();
// });

// // Middleware 2
// app.use("/users", (req, res, next) => {
//   console.log("Logging from Middleware 2");
//   res.send('<h1>The "User" Page</h1>');
// });

app.get("/", (req, res) => {
  console.log("Handling request for /");
  res.send("<h1>Welcome to the Home Page</h1>");
});

app.get("/users", (req, res) => {
  console.log("Handling request for /users");
  res.send("<h1>Welcome to the User Page</h1>");
});

app.listen(3000);
