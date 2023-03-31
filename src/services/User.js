import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import userRepository from '../repositories/userRepository.js';
import errors from '../errors/index.js';
import jwt from 'jsonwebtoken';

dotenv.config();

const create = async ({ name, email, password, type }) => {
  if (type !== 'pacient') throw errors.forbiddenError();

  const { rowCount } = await userRepository.getByEmail(email);

  if (rowCount) throw errors.duplicatedEmailError();

  const hashPassword = await bcrypt.hash(password, 10);

  await userRepository.create({
    name,
    email,
    password: hashPassword,
    type
  });
};

const login = async ({ email, password, type }) => {
  if (type !== 'pacient') throw errors.forbiddenError();

  const { rows: [user] } = await userRepository.getByEmail(email);
  if (!user) throw errors.invalidCredentialsError();

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) throw errors.invalidCredentialsError();

  const token = jwt.sign({ id: user.id }, process.env.SECRET);
  return { name: user.name, token };
};

export default {
  create,
  login
};