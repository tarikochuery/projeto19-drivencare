import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import userRepository from '../repositories/userRepository.js';
import errors from '../errors/index.js';

dotenv.config();

const create = async ({ name, email, password, type }) => {
  if (type !== 'pacient') throw new Error('Invalid User Type');

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

export default {
  create
};