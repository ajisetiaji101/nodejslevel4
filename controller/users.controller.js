const { Users } = require("../models");
const uuid = require("uuid");

class UsersController {
  static async getUsers(req, res) {
    const data = await Users.findAll();
    res.status(200).json({ data });
  }

  static async getUser(req, res) {
    const id = req.params.id;
    const data = await Users.findOne({
      where: {
        id,
      },
    });
    res.status(200).json({ data });
  }

  static async createUser(req, res) {
    const id = uuid.v4();
    const { email, password, fullname, phoneNumber } = req.body;
    const payload = {
      email,
      password,
      fullname,
      phoneNumber,
    };
    const data = await Users.create(payload);
    res.status(200).json({ data });
  }

  static async updateUser(req, res) {
    const id = req.params.id;
    const { email, password, fullname, phoneNumber } = req.body;
    const payload = {
      email,
      password,
      fullname,
      phoneNumber,
    };
    const options = {
      where: {
        id,
      },
    };
    const data = await Users.update(payload, options);
    res.status(200).json({ data });
  }

  static async deleteUser(req, res) {
    const id = req.params.id;
    const options = {
      where: {
        id,
      },
      returning: true,
    };
    const deleted = await Users.destroy(options);
    res.status(200).json({ deleted });
  }
}

module.exports = UsersController;
