const jwt = require("jsonwebtoken");

// My models

////////////////////////////////////////////////////////////////////////////////////////

const fetchPerson = (req, res, next) => {
  const token = req.header("auth-token");
  // console.log(token);
  // * if token is verified then the mongoId contained in the token always belongs to some user doc

  if (!token) {
    return res
      .status(401)
      .send({ statusText: "TOKEN NOT FOUND" });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.mongoId = data.person.mongoId;
    req.role = data.person.role;

    // console.log(req.role);
    next();
  } catch (err) {
    // console.log(err.message);

    res.status(401).send({ statusText: "INVALID TOKEN" });
  }
};

const isUser = (req, res, next) => {
  // console.log(req.role);

  if (req.role !== "user") {
    return res.status(401).send({ statusText: "INVALID TOKEN" });
  }
  next();
};

const isCounterparty = (req, res, next) => {
  // console.log(req.role);

  if (req.role !== "counterparty") {
    return res.status(401).send({ statusText: "INVALID TOKEN" });
  }

  next();
};

module.exports = { isUser, isCounterparty, fetchPerson };
