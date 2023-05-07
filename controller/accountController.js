const Account = require("../schemas/accountSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const account = req.body;
    const isUserExisting = await Account.findOne({
      username: account.username,
    });

    if (!isUserExisting)
      return res
        .status(400)
        .send({ message: "User does not exist. Please contact admin" });

    const isPasswordMatch = await bcrypt.compare(
      account.password,
      isUserExisting.password
    );

    if (!isPasswordMatch)
      return res.status(400).send({ message: "Username/password is invalid" });

    jwt.sign(
      { username: account.username },
      process.env.JWT_SECRET,
      { expiresIn: 86400 },
      (err, token) => {
        if (err) {
          res.send({ message: err });
        } else {
          res.status(200).send({ message: "Sucess", token: `Bearer ${token}` });
        }
      }
    );
  } catch (error) {
    res
      .status(400)
      .send({ message: "Something went wrong", error: error.message });
  }
};

const register = async (req, res) => {
  try {
    const account = req.body;
    const isAccountExist = await Account.findOne({
      username: account.username,
    });
    if (isAccountExist)
      return res.status(400).send({ message: "Account already exist" });

    const hashedPassword = await bcrypt.hash(account.password, 10);
    const result = await Account.create({
      username: account.username,
      password: hashedPassword,
    });
    res.status(200).send({ message: "Success", data: result });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Something went wrong", error: error.message });
  }
};

exports.login = login;
exports.register = register;
