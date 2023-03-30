import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import userRepository from '../repositories/userRepository.js';

dotenv.config();

const create = async ({ name, email, password, type }) => {
  if (type !== 'pacient') throw new Error('Invalid User Type');

  const { rowCount } = await userRepository.getByEmail(email);

  if (rowCount) throw new Error('User already exists');

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