const jwt = require("jsonwebtoken");
class Token {
  static makeToken(payload) {
    return jwt.sign(payload, "ssshh");
  }
  static decodeToken(token) {
    try {
      const _return = jwt.verify(token, "ssshh");
      if (!_return) {
        return null;
      }
      return _return;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Token;
