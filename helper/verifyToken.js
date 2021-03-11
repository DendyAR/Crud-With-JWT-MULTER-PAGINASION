const jwt = require("jsonwebtoken");
const formResponse = require("./formResponse");

const verifyToken = (req, res, next) => {
  const bearerToken = req.header("user-token");

  if (!bearerToken) {
    formResponse(
      {
        message: `Resource not Found`,
        status: 404,
      },
      res
    );
  } else {
    const token = bearerToken.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (!err) {
        if (decoded.role == "admin") next();
        else if (decoded.role == "super ademin") next();
        else if (decoded.id == req.params.id) next();
        else
          formResponse(
            {
              message: `Forbidden`,
              status: 403,
            },
            res
          );
      } else {
        formResponse(
          {
            message: err.message,
            status: 400,
          },
          res
        );
      }
    });
  }
};

module.exports = verifyToken;
