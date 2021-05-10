const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const jwt = require("jsonwebtoken");
  const authConfig = require("../config/auth");

  if (!authHeader) return res.status(401).send({ error: "You need login to have access." });

  const parts = authHeader.split(" ");

  if (!parts.length === 2) return res.status(401).send({ error: "Token error" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Token malformatted" });

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Token invalid" });
    req.user_id = decoded.id;
    isAGuest = false;
    return next();
  });
};

const guest = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) return res.status(401).send({ error: "You already log in!" });
    next();
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { authMiddleware, guest };
