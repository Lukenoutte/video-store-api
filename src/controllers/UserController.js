const User = require("../models/User");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
      expiresIn: "1d",
    });
  }

const authenticateUser = async (req, res) => {
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
      res.status(400).send({ error: "User not found!" });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      res.status(400).send({ error: "Invalid password!" });
    }
    user.password = undefined;
    res.send({ user, token: generateToken({ id: user.id }) });
  } catch (err) {
    console.log(err);
  }
};

const storeUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const user = await User.create({ email, name, password });

    user.password = undefined;
    return res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  storeUser, authenticateUser
};
