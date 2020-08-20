const db = require("../../db/config");

module.exports = {
  add,
};

function add(user) {
  return db("users").insert(user);
}
