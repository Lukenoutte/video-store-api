const User = require("../models/User");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret);
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: {
          [Op.iLike]: `%${email}`,
        },
      },
    });

    if (!user) {
      return res.status(400).send({ error: "User not found." });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: "Invalid password." });
    }
    user.password = undefined;
    res.send({ user, token: generateToken({ id: user.id }) });
  } catch (err) {
    res.status(500).send({ error: "Error on try login." });
  }
};

const createUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    await User.findOrCreate({
      where: {
        email: email,
      },
      defaults: { email, name, password },
    }).then(function (result) {
      var user = result[0],
        created = result[1];

      if (!created) {
        return res.status(400).send({ error: "User already exists." });
      }

      user.password = undefined;
      return res.json(user);
    });
  } catch (err) {
    res.status(500).send({ error: "Error on create a new user." });
  }
};

module.exports = {
  createUser,
  login,

};
