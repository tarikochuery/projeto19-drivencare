import User from "../services/User.js";

const create = async (req, res, next) => {
  const { body: user } = req;
  try {
    await User.create(user);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  const { body: user } = req;
  try {
    const authData = await User.login(user);
    res.send(authData);
  } catch (error) {
    next(error);
  }
};

export default {
  create,
  signin
};