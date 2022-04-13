const { token } = require("../utils");
function authentication(req, res, next) {
  const access_token = req.headers.token;
  const payload = access_token ? token.decodeToken(access_token) : 0;
  if (!payload || !access_token) {
    res.status(401).json({
      status: 401,
      message: "Silahkan Login Ya",
    });
  } else {
    req.userLogin = payload;
    next();
  }
}

module.exports = authentication;
