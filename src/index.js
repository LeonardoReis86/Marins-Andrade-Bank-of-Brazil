const express = require("express");
const usersRouter = require("./router/users");

app.use("users", userRouter);

const app = express();

app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});
