const { Users } = require("../models");
const { token } = require("../utils");

class LoginController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({
        where: {
          email,
          password,
        },
      });
      // const checkPassword = karyawan ? karyawan.dataValues.Password === Password : 0;
      if (!user) {
        res.status(401).json({
          status: 401,
          message: "Unauthorized",
        });
        return;
      }

      const access_token = token.makeToken(user.dataValues);
      res.status(200).json({ access_token });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = LoginController;
