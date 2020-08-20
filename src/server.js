const express = require("express");
const server = express();

const Users = require("./api/users/users-model");

server.use(express.json());

server.post("/users", (req, res) => {
  Users.add(req.body).then((user) => {
    res.status(201).json(user);
  });
});

server.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then((deleted) => {
      res.status(204).end();
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = server;
