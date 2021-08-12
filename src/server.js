const express = require("express");

const morgan = require("morgan");

const app = express();

const usersRouter = require("./resources/users/router");

// middleware (looks at every request that comes through)

//runs 2nd
app.use(morgan("dev"));

//runs 3rd
app.use(express.json());

// routes
//runs 5th
app.use("/users", usersRouter);

// runs 6th
app.get("/", (req, res) => {
  res.json({ msg: "...get all request route working" });
});

// start the server
// runs 1st
app.listen(4000, () => {
  console.log("server listening on port 4000");
});
