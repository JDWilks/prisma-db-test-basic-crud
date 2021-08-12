const usersRouter = require("express").Router();

const {
  createOneUser,
  findAllUsers,
  updateOneUser,
  deleteUserById,
} = require("./controller");

usersRouter.post("/", createOneUser);
usersRouter.get("/", findAllUsers);
usersRouter.patch("/", updateOneUser);
usersRouter.delete("/:id", deleteUserById);

module.exports = usersRouter;
