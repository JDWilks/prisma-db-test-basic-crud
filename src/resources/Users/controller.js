const dbClient = require("../../utils/dbClient");

//create
function createOneUser(req, res) {
  const newUser = req.body;

  dbClient.user
    .create({ data: newUser })
    .then((newUser) => {
      res.json({ newUser });
    })
    .catch((error) => {
      res.json({ msg: "...you fucked up didn't ya son" });
    });
}

// read
function findAllUsers(req, res) {
  dbClient.user.findMany().then((allUsers) => {
    res.json({ allUsers });
  });
}

//update
// not working - completely wrong - pretty lost
function updateOneUser(req, res) {
  const updatedUser = req.body;
  const id = parseInt(req.params.id);
  const updatedUserKey = { originalUser, ...updatedUser };

  dbClient.user
    .update({
      where: { id: id },
      data: { updatedUserKey: updatedUserKey },
    })
    .then((updatedUserKey) => {
      res.json({ updatedUserKey });
    });
}

//delete

function deleteUserById(req, res) {
  const id = parseInt(req.params.id);
  dbClient.user
    .delete({
      where: { id: id },
    })
    .then((user) => res.json({ msg: `you deleted meeeee @ id no ${id}` }));
}

module.exports = { createOneUser, findAllUsers, updateOneUser, deleteUserById };

///
