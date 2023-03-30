import User from "../services/User.js";

const create = async (req, res) => {
  const { body: user } = req;
  try {
    await User.create(user);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  create
};